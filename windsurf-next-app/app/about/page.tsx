export default function About() {
  return (
    <div className="page-container">
      <h1 className="heading">About Us</h1>
      <p className="subheading">Learn more about our team and mission</p>
      
      <div className="prose lg:prose-xl">
        <p className="mb-6">
          We are a passionate team dedicated to creating amazing web experiences.
          Our focus is on modern design and smooth interactions.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          To deliver exceptional web experiences that combine beautiful design
          with seamless functionality.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">Innovation in design and technology</li>
          <li className="mb-2">User-centric approach</li>
          <li className="mb-2">Quality and attention to detail</li>
          <li>Continuous improvement</li>
        </ul>
      </div>
    </div>
  );
}
