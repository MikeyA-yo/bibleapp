"use client";
export default function Cry() {
  return (
    <>
      <div className="lg:max-h-56 !max-h-32">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '  @font-face {    font-display: block;    font-family: Roboto;    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")  }  @font-face {    font-display: fallback;    font-family: Roboto;    font-weight: 600;    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")  }  @font-face {    font-display: fallback;    font-family: Roboto;    font-weight: 700;    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")  }  #sib-container input:-ms-input-placeholder {    text-align: left;    font-family: "Helvetica", sans-serif;    color: #c0ccda;  }  #sib-container input::placeholder {    text-align: left;    font-family: "Helvetica", sans-serif;    color: #c0ccda;  }  #sib-container textarea::placeholder {    text-align: left;    font-family: "Helvetica", sans-serif;    color: #c0ccda;  }  #sib-container a {    text-decoration: underline;    color: #2BB2FC;  }',
          }}
        />
        <link
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
          rel="stylesheet"
        />
        <div className="sib-form !max-h-auto text-center lg:bg-[#EFF2F7]">
          <div className="sib-form-container !max-h-56" id="sib-form-container">
            <div
              className="sib-form-message-panel bg-[#ffeded] border-[#ff4949] max-w-lg text-base text-left rounded text-[#661d1d]"
              id="error-message"
              style={{
                fontFamily: '"Helvetica", sans-serif',
              }}
            >
              <div className="sib-form-message-panel__text  sib-form-message-panel__text--center">
                <svg
                  className="sib-icon sib-notification__icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Your subscription could not be saved. Please try again.
                </span>
              </div>
            </div>
            <div />
            <div
              className="sib-form-message-panel bg-[#e7faf0] border-[#13ce66] text-left max-w-lg rounded text-base text-[#085229]"
              id="success-message"
              style={{
                fontFamily: '"Helvetica", sans-serif',
              }}
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg
                  className="sib-icon sib-notification__icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Your subscription has been successful.
                </span>
              </div>
            </div>
            <div />
            <div
              className="sib-container--large sib-container--vertical !max-h-40 max-w-lg text-center border-2 rounded border-solid !bg-[rgba(255,255,255,0.49)]  border-[#C0CCD9]"
              id="sib-container"
            >
              <form
                action="https://5ce8b968.sibforms.com/serve/MUIFAHgziETc5jzyLX2GKjrLlPuRewjrGJis8STM07XUFLpMbX97s9bxNK0j5QP14u362WBpPxpTANQEdItsgCtw8NOIk7hgwTLf9ciiLVeAN1eTSpvVKV4a1cB9mUaZIHw5jAAfDHgWhMkkJPkD-jcQ69ZauxKiHsxB2hqhgDaYxwrFlKMq8htFSET_aTe6lLsqyK41B_wmfxE5"
                data-type="subscription"
                id="sib-form"
                method="POST"
              >
                <div className="py-2 px-0">
                  <div
                    className="sib-form-block bg-transparent text-[#3C4858] text-left text-base"
                    style={{
                      fontFamily: '"Helvetica", sans-serif',
                    }}
                  >
                    <div className="sib-text-form-block">
                      <p>Subscribe to our newsletter and stay updated.</p>
                    </div>
                  </div>
                </div>
                <div className="py-2 px-0">
                  <div className="sib-input sib-form-block">
                    <div className="form__entry entry_block">
                      <div className="form__label-row ">
                        <label
                          className="entry__label text-[#3c4858] text-base font-bold text-left"
                          data-required="*"
                          htmlFor="EMAIL"
                          style={{
                            fontFamily: '"Helvetica", sans-serif',
                          }}
                        >
                          Enter your email address to subscribe
                        </label>
                        <div className="entry__field">
                          <input
                            autoComplete="off"
                            className="input "
                            data-required="true"
                            id="EMAIL"
                            name="EMAIL"
                            placeholder="EMAIL"
                            required
                            type="text"
                          />
                        </div>
                      </div>
                      <label
                        className="entry__error entry__error--primary text-base text-left bg-[#ffeded] border-[#ff4949] rounded text-[#661d1d]"
                        style={{
                          fontFamily: '"Helvetica", sans-serif',
                        }}
                      ></label>
                      <label
                        className="entry__specification text-[#8390A4] text-xs text-left"
                        style={{
                          fontFamily: '"Helvetica", sans-serif',
                        }}
                      >
                        Provide your email address to subscribe. For e.g
                        abc@xyz.com
                      </label>
                    </div>
                  </div>
                </div>
                <div className="py-2 px-0">
                  <div className="sib-form-block text-left">
                    <button
                      className="sib-form-block__button sib-form-block__button-with-loader text-base font-bold text-left text-white rounded border-0 bg-[#3E4857]"
                      form="sib-form"
                      style={{
                        fontFamily: '"Helvetica", sans-serif',
                      }}
                      type="submit"
                    >
                      <svg
                        className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                        viewBox="0 0 512 512"
                      >
                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                      </svg>
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
                <input
                  className="input--hidden"
                  defaultValue=""
                  name="email_address_check"
                  type="text"
                />
                <input defaultValue="en" name="locale" type="hidden" />
              </form>
            </div>
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';  window.LOCALE = 'en';  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = \"The information provided is invalid. Please review the field format and try again.\";  window.REQUIRED_ERROR_MESSAGE = \"This field cannot be left blank. \";  window.GENERIC_INVALID_MESSAGE = \"The information provided is invalid. Please review the field format and try again.\";  window.translation = {    common: {      selectedList: '{quantity} list selected',      selectedLists: '{quantity} lists selected'    }  };  var AUTOHIDE = Boolean(0);",
          }}
        />
        <script defer src="https://sibforms.com/forms/end-form/build/main.js" />
      </div>
    </>
  );
}
