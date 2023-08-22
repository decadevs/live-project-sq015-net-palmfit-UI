import React from 'react';



const Footer = () => {
        
    return(
        <footer className="text-white pt-5 pb-4" style={{backgroundColor: 'teal'}}>

	<div className="container text-md-left">

		<div className="row" style={{textAlign: 'left'}}>

			<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
				<h3 className="mb-4 font-weight-bold text-white">Palmfit</h3>
				<p>Palmfit provides you the platform to calculate your calorie and monitor what you eat.</p>
				
			</div>

			<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
				<h5 className="mb-4 font-weight-bold text-white">Programs</h5>
			<p>
				<a href="#" className="text-white" style={{textDecoration: 'none'}}> Our Programs</a>
			</p>
			<p>
				<a href="#" className="text-white" style={{textDecoration: 'none'}}> Become a member</a>
			</p>
			<p>
				<a href="#" className="text-white" style={{textDecoration: 'none'}}> Privacy policy</a>
			</p>
			

			</div>

			<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
				<h5 className="mb-4 font-weight-bold text-white">Contact</h5>
			<p>
				<a href="#" className="text-white" style={{textDecoration: 'none'}}>palmfit@gmail.com</a>
			</p>
			<p>
				<a href="#" className="text-white" style={{textDecoration: 'none'}}>+2348032921374</a>
			</p>
			
			</div>

			<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
				<h5 className="mb-4 font-weight-bold text-white" >Follow us</h5>
				<p>
					<i className="fas fa-home mr-3"></i>Linkedin
				</p>
				<p>
					<i className="fas fa-envelope mr-3"></i>Twitter
				</p>
				<p>
					<i className="fas fa-phone mr-3"></i>Facebook
				</p>
				<p>
					<i className="fas fa-print	 mr-3"></i>Instagram
				</p>
			</div>
			
		</div>

		{/* <hr className="mb-4" /> */}

		<div className="row" style={{textAlign: 'left'}}>

			<div className="col-md-7 col-lg-12 ">
				<p>	Copyright ©2023 All rights reserved by: DECAGON.NET SQ015
					</p>
				
			</div>

			<div className="col-md-5 col-lg-4">
				<div className="text-center text-md-right">

					<ul className="list-unstyled list-inline">
						<li className="list-inline-item">
							<a href="#" className="btn-floating btn-sm text-white" styles={{fontSize: '23px'}}><i className="fab fa-facebook"></i></a>
						</li>
						<li className="list-inline-item">
							<a href="#" className="btn-floating btn-sm text-white" styles={{fontSize: '23px'}}><i className="fab fa-twitter"></i></a>
						</li>
						<li className="list-inline-item">
							<a href="#" className="btn-floating btn-sm text-white" styles={{fontSize: '23px'}}><i className="fab fa-google-plus"></i></a>
						</li>
						<li className="list-inline-item">
							<a href="#" className="btn-floating btn-sm text-white" styles={{fontSize: '23px'}}><i className="fab fa-linkedin-in"></i></a>
						</li>
						<li className="list-inline-item">
							<a href="#" className="btn-floating btn-sm text-white" styles={{fontSize: '23px'}}><i className="fab fa-youtube"></i></a>
						</li>
					</ul>
					
				</div>
				
			</div>
			
		</div>

	</div>
	
</footer>
    )
}

export default Footer;