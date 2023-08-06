import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-primary text-white text-center fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3">
              <p>
                Todos os direitos reservados &copy; {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
