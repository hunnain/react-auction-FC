import React from 'react';  
  class SellPage extends React.Component {
    render() {
      return ( 
        <React.Fragment>
        <div class="container-fluid sell-watch-main-cont">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <h1 class="white pt-400">Sell a Watch</h1>
                  </div>
              </div>
          </div>
      </div>

      <div class="container-fluid pt-50 pb-50 bg-all">
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                <form>
                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="ml-0 sell-watch-personal">Personal Details:</h5>
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="text" class="acc-input bg-white" placeholder="First Name" />
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="text" class="acc-input bg-white" placeholder="Last Name" />
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="number" class="acc-input bg-white" placeholder="Mobile #" />
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="text" class="acc-input bg-white" placeholder="Email address" />
                        </div>
                        <div class="col-md-6 mb-15">
                            <select name="Country" id="Country" class="sell-watch-select acc-input">
                                <option value="Country">Country</option>
                            </select>
                        </div>
                    </div>
                    <hr></hr>
                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="ml-0 sell-watch-personal">Watch Details:</h5>
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="text" class="acc-input bg-white" placeholder="Brand" />
                        </div>
                        <div class="col-md-6 mb-15">
                            <input type="text" class="acc-input bg-white" placeholder="Watch Model/Number" />
                        </div>
                    </div>
                    <hr></hr>
                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="ml-0 sell-watch-personal">Additional Details:</h5>
                        </div>
                        <div class="col-md-12 mb-15">
                            <textarea class="acc-input bg-white sell-watch-textarea" name="sell-watch-detail" id="sell-watch-detail" cols="30" rows="10">type your question here.</textarea>
                        </div>
                        <div class="col-md-3">
                            <input class="acc-profile-btn-one" type="button" value="Submit" />
                        </div>
                    </div>
                </form>

            </div>
              <div class="col-md-1">
              </div>
              <div class="col-md-5">
                  <div class="row">
                      <div class="col-md-12">
                          <h3 class="mb-30 fw-100">How does "Watch Trade" works? and how fast &amp; easy it is?</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <input class="learn-more mt-30 wd-30" type="button" value="Learn more" />
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      </React.Fragment>
      );
    }
  }
export default SellPage  