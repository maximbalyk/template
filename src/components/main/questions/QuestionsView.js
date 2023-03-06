import React, { Component } from "react";

class QuestionsView extends Component {
    render() {
        return (
            <section className="questions" id="questions">
                <div className="grid">
                    <h2 className="questions__title grid__item--1-4 grid__item--desktop-2-6">
                        DO YOU HAVE ANY QUESTIONS?
                    </h2>
                    <form
                        action="src/components/main"
                        className="grid__item--5-8 grid__item--desktop-8-10"
                    >
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="Your email"
                            className="questions__field"
                        />
                        <textarea
                            required
                            name="message"
                            placeholder="Your message..."
                            className="questions__field questions__textarea"
                        />
                        <button className="questions__button">SEND</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default QuestionsView;
