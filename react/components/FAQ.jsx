import React from "react";
import "./netflix.css";

function FAQ() {
  return (
    <React.Fragment>
      <div className="faq-header">
        <h2>Frequently Asked Questions.</h2>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">What is Netflix?</label>
            <div className="accordion-content">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want all for one low monthly
                price. There's always something new to discover and new TV shows
                and movies are added every week!
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second" />
            <label for="second">How much does Netflix cost?</label>
            <div className="accordion-content">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from $6.99 to $19.99 a month. No extra costs, no contracts.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">What's different on Basic with ads?</label>
            <div className="accordion-content">
              <p>
                Basic with ads is a great way to enjoy movies and TV shows at a
                lower price. You can stream your favorites on any device with
                limited ad breaks. This plan does not allow downloads and a
                limited number of movies and TV shows are not available due to
                licensing restrictions. Some location and device restrictions
                also apply.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label for="fourth">Where can I watch?</label>
            <div className="accordion-content">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favorite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label for="fifth">How do I cancel?</label>
            <div className="accordion-content">
              <p>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees start or stop your
                account anytime.
              </p>
            </div>
          </li>
        </ul>
        <small>
          Ready to watch? Enter your email to create or restart your membership.
        </small>
        <form className="netflix-email">
          <input type="email" placeholder="Email Address" />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default FAQ;
