
const Contact = () => {
  return (
    <>
      <div className="card-body" >
        <div class="row">
          <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
          <div class="card col-md-12 col-sm-12 col-lg-10 col-xl-10 col-xxl-10 m-3 border border-light shadow-lg rounded">
            <div class="card-body">
              <h3 class="card-title  text-center m-3">Contact Me</h3>
              <h5 class="card-title  m-3">My Detail</h5>
              <p>Name: Shivam Bhatt</p>
              <p>Email: 4u14shivu@gmail.com</p>
              <p>Phone: +918607307097</p>
              <p>Address: #516, Manav Colony, Saketri<br></br>Panchkula, Haryana(India)</p>
            </div>
            <div class="card-body">
              <h5 class="card-title  m-3">Leave Note</h5>
              <p>Please Leave Your Note</p>
              <form>
                <div className="row p-2">
                  <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
                  <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="name">Full Name:</label>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                        <input type="text" placeholder="Enter Your Name...." name="name" className="form-control"></input>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="email">Email:</label>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                        <input type="email" placeholder="Enter Your Email...." name="email" className="form-control"></input>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
                </div>
                <div className="row p-2">
                  <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
                  <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="mobile">Mobile:</label>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                        <input type="text" placeholder="Enter Your Mobile...." name="mobile" className="form-control"></input>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2"></div>
                  <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="address">Address:</label>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                        <input type="text" placeholder="Enter Your Address...." name="address" className="form-control"></input>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
                </div>
                <div className="row p-2">
                <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
                  <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                    <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                        <label htmlFor="massege">Massege:</label>
                      </div>
                      <div className="col-md-12 col-sm-12 col-lg-10 col-xl-20 col-xxl-20">
                        <textarea placeholder="Enter Your Massege...." name="massege" className="form-control" ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
                </div>
                <div className="text-center">
                <button type="submit" class="btn btn-outline-secondary center">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-lg-1 col-xl-1 col-xxl-1"></div>
        </div>
      </div>
    </>
  )
}
export default Contact