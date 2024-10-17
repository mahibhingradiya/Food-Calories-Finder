import './footer.css'
export default function footer() {
    return(
        <>
        {/* Footer Section */}
      <footer className="footer py-6 bg-gray-900 text-white text-center mt-8">
      <div className="container mx-auto">
      {/* Copyright notice */}
        <p className="mb-2">&copy; 2024 HungryBird. All Rights Reserved.</p>
  
      {/* Social media links */}
        <p>
          Follow us on 
          <a href="#" className="ml-2 text-BaseColor">Facebook</a> | 
          <a href="#" className="ml-2 text-BaseColor">Twitter</a> | 
          <a href="#" className="ml-2 text-BaseColor">Instagram</a>
        </p>
      </div>
    </footer></>
    )
}