import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const DynamicPricing = () => {
  const websiteTypes = {
    'E-Commerce': {
      maxPrice: 100000,
      minPrice: 70000,
      features: [
        { name: 'Home', weight: 1 },
        { name: 'Cart', weight: 3 },
        { name: 'Product Page', weight: 4 },
        { name: 'Checkout', weight: 5 },
        { name: 'Login/Signup', weight: 2 },
        { name: 'Admin Panel', weight: 10 }, // Expensive feature
        { name: 'Basic Analytics', weight: 1 }, // Low-cost feature
        { name: 'Customer Reviews', weight: 2 },
      ],
    },
    'Business': {
      maxPrice: 50000,
      minPrice: 30000,
      features: [
        { name: 'Home', weight: 1 },
        { name: 'About Us', weight: 1 },
        { name: 'Services', weight: 2 },
        { name: 'Contact', weight: 1 },
        { name: 'Blog', weight: 2 },
        { name: 'Admin Panel', weight: 8 }, // Expensive feature
        { name: 'Basic SEO', weight: 1 }, // Low-cost feature
        { name: 'Testimonials', weight: 1 },
      ],
    },
    'Portfolio': {
      maxPrice: 25000,
      minPrice: 15000,
      features: [
        { name: 'Home', weight: 1 },
        { name: 'Portfolio Gallery', weight: 3 },
        { name: 'About Me', weight: 1 },
        { name: 'Contact', weight: 1 },
        { name: 'Basic SEO', weight: 1 }, // Low-cost feature
        { name: 'Testimonials', weight: 1 },
        { name: 'Admin Panel', weight: 8 }, // Expensive feature
      ],
    },
  };

  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const calculatePrice = () => {
    if (!selectedType) return 0;

    const { maxPrice, minPrice, features } = websiteTypes[selectedType];

    const totalWeight = selectedFeatures.reduce((sum, feature) => {
      const featureWeight = features.find((f) => f.name === feature)?.weight || 0;
      return sum + featureWeight;
    }, 0);

    const maxPossibleWeight = features.reduce((sum, feature) => sum + feature.weight, 0);

    return Math.round(
      minPrice + (totalWeight / maxPossibleWeight) * (maxPrice - minPrice)
    );
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add Savannah Prime Agency information
    doc.setFontSize(18);
    doc.text('Savannah Prime Agency', 20, 20);
    doc.setFontSize(12);
    doc.text('Email: info@savannahprimeagency.com', 20, 30);
    doc.text('Phone: +254 700 000 000', 20, 40);
    doc.text('Website: www.savannahprimeagency.com', 20, 50);

    // Add user information
    doc.setFontSize(14);
    doc.text('Quotation Details', 20, 70);
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, 80);
    doc.text(`Email: ${formData.email}`, 20, 90);
    doc.text(`Phone: ${formData.phone}`, 20, 100);

    // Add website type and selected features
    doc.text(`Website Type: ${selectedType}`, 20, 120);
    doc.text('Selected Features:', 20, 130);
    selectedFeatures.forEach((feature, index) => {
      doc.text(`- ${feature}`, 30, 140 + index * 10);
    });

    // Add price
    doc.setFontSize(14);
    doc.text(`Total Price: ${calculatePrice()} KSH`, 20, 160 + selectedFeatures.length * 10);

    // Save the PDF
    doc.save('quotation.pdf');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate sending data to the backend or notifying you
    console.log('Quotation Submitted:', {
      websiteType: selectedType,
      selectedFeatures,
      price: calculatePrice(),
      user: formData,
    });

    alert('Quotation submitted successfully! You can now download your quotation.');

    // Show the download button
    setShowDownloadButton(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dynamic Pricing Calculator</h1>

      {/* Website Type Selector */}
      {!showForm && (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Website Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.keys(websiteTypes).map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setSelectedFeatures([]); // Reset features when type changes
                  }}
                  className={`p-4 border rounded-lg text-center ${
                    selectedType === type ? 'bg-primary text-white' : 'bg-white'
                  } hover:shadow-md`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Selection */}
          {selectedType && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Select Features for {selectedType}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {websiteTypes[selectedType].features.map((feature) => (
                  <label
                    key={feature.name}
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:shadow-md"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature.name)}
                      onChange={() => handleFeatureToggle(feature.name)}
                      className="form-checkbox h-5 w-5 text-primary"
                    />
                    <span>{feature.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Price Display */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Estimated Price</h2>
            <p className="text-4xl font-bold text-primary">{calculatePrice()} KSH</p>
            <p className="text-sm text-muted-foreground">* Price updates as you select features</p>
          </div>

          {/* Submit Request */}
          {selectedFeatures.length > 0 && (
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-lg"
              >
                Submit Request
              </button>
            </div>
          )}
        </>
      )}

      {/* Registration Form */}
      {showForm && (
        <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Register Your Quotation</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-lg w-full"
          >
            Submit Quotation
          </button>
        </form>
      )}

      {/* Download PDF Button */}
      {showDownloadButton && (
        <div className="text-center mt-6">
          <button
            onClick={generatePDF}
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-lg"
          >
            Download Quotation as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default DynamicPricing;