import React, { useState, useEffect } from "react";

/**
 * BookingForm Component
 *
 * Handles the table reservation form.
 * - Tracks form state: firstName, lastName, date, time, guests, occasion.
 * - Validates input before submission.
 * - Dispatches date changes to update available times in parent component.
 * - Displays reservation confirmation after submission.
 *
 * Props:
 * - availableTimes: array of available times to select
 * - dispatch: function to update available times
 * - submitForm: callback function to submit the reservation data
 */
const BookingForm = ({availableTimes, dispatch, submitForm}) => {

    // Form state variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [reservationData, setReservationData] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    guest: "",
    });

    // Validate form whenever relevant inputs change
    useEffect(() => {
    const isValid =
        firstName.trim().length > 2 &&
        lastName.trim().length > 2 &&
        date !== "" &&
        time !== "" &&
        guest >= 1 &&
        guest <= 10;
    setIsFormValid(isValid);
    }, [firstName, lastName, date, time, guest]);

    //Validate single field on blur
    const handleBlur = (field) => {
    const newErrors = { ...errors };
    switch (field) {
        case "firstName":
        newErrors.firstName =
            firstName.trim().length <= 2
            ? "First name must be at least 3 characters."
            : "";
        break;
        case "lastName":
        newErrors.lastName =
            lastName.trim().length <= 2
            ? "Last name must be at least 3 characters."
            : "";
        break;
        case "date":
        newErrors.date = !date ? "Please select a date." : "";
        break;
        case "time":
        newErrors.time = !time ? "Please select a time." : "";
        break;
        case "guest":
        newErrors.guest =
            guest < 1 || guest > 10
            ? "Guests number must be between 1 and 10."
            : "";
        break;
        default:
        break;
        }

    setErrors(newErrors);
    };

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default HTML form submission
        if (!isFormValid)
            return;
        const payload = {
            firstName,
            lastName,
            date,
            time,
            guest,
            occasion: occasion || "None",
        };
        setReservationData(payload);

    // Call submit function passed from parent
        if (submitForm) submitForm(payload);
    };

    // Handles date selection change
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
    // Notify parent/reducer to update available times based on the new date
        dispatch({ type: "UPDATE_TIMES", date: selectedDate });
    }

    // JSX rendering
    return (
        <main aria-label="Main Content" className="reservationMain">
            <section aria-label="Reservation Section" className="reservationSection">
                <h2>Book Your Table</h2>
                <form aria-label="Booking Form" className="reservationTable" onSubmit={handleSubmit}>
                    <div className="nameContainer">
                        <div className="fName">
                            <label htmlFor="firstName" className="required">First Name</label>
                            <input
                                aria-label="First Name Field"
                                type="text"
                                id="firstName"
                                name="first-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                onBlur={() => handleBlur("firstName")}
                                required
                            />
                            {errors.firstName && (
                                <span className="error">{errors.firstName}</span>
                            )}
                        </div>
                        <div className="sName">
                            <label htmlFor="lastName" className="required">Last Name</label>
                            <input
                                aria-label="LAst Name Field"
                                type="text"
                                id="lastName"
                                name="last-name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                onBlur={() => handleBlur("lastName")}
                                required
                            />
                            {errors.lastName && (
                                <span className="error">{errors.lastName}</span>
                            )}
                        </div>
                    </div>
                    <div className="dateContainer">
                        <label htmlFor="date" className="required">Choose Date</label>
                        <input
                            aria-label="Date Field"
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={handleDateChange}
                            onBlur={() => handleBlur("date")}
                            required
                    />
                    {errors.date && (
                        <span className="error">{errors.date}</span>
                    )}
                    </div>
                    <div className="timeContainer">
                        <label htmlFor="time" className="required">Choose Time</label>
                        <select
                            aria-label="Time Field"
                            id="time"
                            name="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            onBlur={() => handleBlur("time")}
                            required
                        >
                            <option value="">Select a time</option>
                            {availableTimes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        {errors.time && (
                            <span className="error">{errors.time}</span>
                        )}
                    </div>
                    <div className="guestsContainer">
                        <label htmlFor="guests" className="required">Number of Guests</label>
                        <input
                            aria-label="Guest Field"
                            type="number"
                            id="guests"
                            name="number-of-guests"
                            min={1}
                            max={10}
                            value={guest}
                            onChange={(e) => setGuest(e.target.value)}
                            onBlur={() => handleBlur("guest")}
                            required
                        />
                        {errors.guest && (
                            <span className="error">{errors.guest}</span>
                        )}
                    </div>
                    <div className="occasionContainer">
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            aria-label="Occasion Field"
                            id="occasion"
                            name="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                        >
                            <option value={""}>Select an Occasion</option>
                            <option value={"birthday"}>Birthday</option>
                            <option value={"anniversary"}>Anniversary</option>
                            <option value={"work-dinner"}>Work Dinner</option>
                            <option value={"other"}>Other</option>
                        </select>
                    </div>
                    <button
                        aria-label="On Click"
                        type="submit"
                        disabled={
                            !firstName ||
                            !lastName ||
                            !date ||
                            !time ||
                            firstName.length < 3 ||
                            lastName.length < 3
                        }
                        style={{
                    cursor: isFormValid ? "pointer" : "not-allowed",
                    opacity: isFormValid ? 1 : 0.6
                        }}
                    >
                        Book Now
                    </button>
                </form>
            {reservationData && (<section className="reservationConfirmation">
                <h3>Your Reservation</h3>
                <p><strong>Name: </strong>{reservationData.firstName} {reservationData.lastName}</p>
                <p><strong>Date: </strong>{reservationData.date}</p>
                <p><strong>Time: </strong>{reservationData.time}</p>
                <p><strong>Guests Count: </strong>{reservationData.guest}</p>
                <p><strong>Ocassion: </strong>{reservationData.occasion}</p>
            </section>
            )}
            </section>
        </main>
    );
};

export default BookingForm;