import React from "react";
import styled from "styled-components";
import mq from "../../utils/mq";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const StyledSectionContainer = styled(SectionContainer)`
  ${mq.a992} {
    padding: 60px 40px;
  }

  ${mq.a1200} {
    padding: 75px 40px;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  max-width: var(--max-width-laptop);

  ${mq.a1400} {
    max-width: var(--max-width-desktop);
  }
`;

const Field = styled.div``;

const SuccessMessage = styled.p`
  color: green;
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class SponsorFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false, success: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => this.setState({ success: true }))
      .catch(error => alert(error));
  };

  render() {
    return (
      <StyledSectionContainer>
        <SectionTitle title="Want to be featured in our community?" />
        <Form
          name="sponsor-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <Field className="field">
            <div className="control">
              <input
                placeholder="NAME"
                className="input"
                type={"text"}
                name={"name"}
                onChange={this.handleChange}
                id={"name"}
                required={true}
              />
            </div>
          </Field>
          <Field className="field">
            <div className="control">
              <input
                placeholder="EMAIL"
                className="input"
                type={"email"}
                name={"email"}
                onChange={this.handleChange}
                id={"email"}
                required={true}
              />
            </div>
          </Field>
          <Field className="field">
            <div className="control">
              <input
                placeholder="COMPANY"
                className="input"
                type={"text"}
                name={"company"}
                onChange={this.handleChange}
                id={"company"}
                required={true}
              />
            </div>
          </Field>
          <Field className="field">
            <div className="control">
              <input
                placeholder="PHONE NUMBER"
                className="input"
                type={"number"}
                name={"phone"}
                onChange={this.handleChange}
                id={"phone"}
                required={true}
              />
            </div>
          </Field>
          <Field className="field">
            <div className="control">
              <textarea
                placeholder="MESSAGE"
                className="textarea"
                name={"message"}
                onChange={this.handleChange}
                id={"message"}
                required={true}
              />
            </div>
          </Field>
          {this.state.success ? (
            <SuccessMessage>
              Your submission has been received. Someone will be in contact with
              you very soon!
            </SuccessMessage>
          ) : (
            <Field className="field submitBtn">
              <Button type="submit" text="submit" />
            </Field>
          )}
        </Form>
      </StyledSectionContainer>
    );
  }
}
