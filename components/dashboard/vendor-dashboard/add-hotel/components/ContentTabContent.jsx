import HotelContent from "./content/HotelContent";
import BannerUploader from "./content/BannerUploader";
import GalleryUploader from "./content/GalleryUploader";
import { useState, useEffect } from "react";

const ContentTabContent = ({ initialData = null, onSubmit, isEditing = false }) => {
  const [formData, setFormData] = useState(initialData || {
    id: '',
    tag: "",
    slideImg: [],
    img: "",
    heroImg: "", // Add heroImg field
    title: "",
    location: "",
    checkin: "",
    checkout: "",
    price: "",
    guests: "",
    bedrooms: "",
    baths: "",
    delayAnimation: "",
    city: "",
    overviewDescription: "",
    locationDescription: "",
    popularFacilities: [{
      popularFacilitiesTitle: '',
      popularFacilitiesDescription: ''
    }],
    housePolicies: [{
      housePoliciesTitle: '',
      housePolicies: ''
    }],
    destinations: [{
      destinationLocation: '',
      destinationImg: ''
    }],
    facilities: [{
      items: [{
        icon: '',
        title: ''
      }]
    }],
    propertyHighlights: [{
      highlightTitle: '',
      highlightIcon: ''
    }],
    nearestPoints: [{
      pointName: '',
      distance: ''
    }],
    bookingPolicies: [{
      bookingPoliciesTitle: '',
      bookingPolicies: ''
    }]
  });

  useEffect(() => {
    if (initialData) {
      const processedData = {
        ...initialData,
        popularFacilities: initialData.popularFacilities || [{
          popularFacilitiesTitle: '',
          popularFacilitiesDescription: ''
        }],
        housePolicies: initialData.housePolicies || [{
          housePoliciesTitle: '',
          housePolicies: ''
        }],
        destinations: initialData.destinations || [{
          destinationLocation: '',
          destinationImg: ''
        }],
        facilities: initialData.facilities || [{
          items: [{
            title: '',
            icon: ''
          }]
        }],
        propertyHighlights: initialData.propertyHighlights || [{
          highlightTitle: '',
          highlightIcon: ''
        }],
        nearestPoints: initialData.nearestPoints || [{
          pointName: '',
          distance: ''
        }],
        bookingPolicies: initialData.bookingPolicies || [{
          bookingPoliciesTitle: '',
          bookingPolicies: ''
        }]
      };
      setFormData(processedData);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle nested fields (e.g., popularFacilities.0.popularFacilitiesTitle)
    if (name.includes('.')) {
      const [section, index, field] = name.split('.');
      setFormData(prev => {
        // Initialize the section as an empty array if it doesn't exist
        if (!prev[section]) {
          prev[section] = [];
        }
        
        // Handle nested items for facilities
        if (field && field.includes('items')) {
          const [itemsField, itemIndex, itemProp] = field.split('.');
          return {
            ...prev,
            [section]: prev[section].map((group, i) => {
              if (i === parseInt(index)) {
                return {
                  ...group,
                  items: group.items.map((item, j) => 
                    j === parseInt(itemIndex) ? { ...item, [itemProp]: value } : item
                  )
                };
              }
              return group;
            })
          };
        }

        // Handle other nested fields
        return {
          ...prev,
          [section]: prev[section].map((item, i) => 
            i === parseInt(index) ? { ...item, [field]: value } : item
          )
        };
      });
    } else {
      // Handle top-level fields
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const submissionData = {
      ...formData,
      popularFacilities: formData.popularFacilities.filter(f => f.popularFacilitiesTitle || f.popularFacilitiesDescription),
      housePolicies: formData.housePolicies.filter(p => p.housePoliciesTitle || p.housePolicies),
      destinations: formData.destinations.filter(d => d.destinationLocation || d.destinationImg),
      facilities: formData.facilities.filter(f => f.items.some(item => item.title || item.icon)),
      propertyHighlights: formData.propertyHighlights.filter(h => h.highlightTitle || h.highlightIcon),
      nearestPoints: formData.nearestPoints.filter(p => p.pointName || p.distance),
      bookingPolicies: formData.bookingPolicies.filter(p => p.bookingPoliciesTitle || p.bookingPolicies)
    };

    if (isEditing) {
      await onSubmit(submissionData);
    } else {
      try {
        const response = await fetch("/api/hotels", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
          throw new Error(`Failed to add hotel. Status: ${response.status}`);
        }

        const data = await response.json();
        alert("Hotel added successfully!");
        setFormData({
          id: '',
          tag: "",
          slideImg: [],
          img: "",
          heroImg: "", // Add heroImg field
          title: "",
          location: "",
          checkin: "",
          checkout: "",
          price: "",
          guests: "",
          bedrooms: "",
          baths: "",
          delayAnimation: "",
          city: "",
          overviewDescription: "",
          locationDescription: "",
          popularFacilities: [{
            popularFacilitiesTitle: '',
            popularFacilitiesDescription: ''
          }],
          housePolicies: [{
            housePoliciesTitle: '',
            housePolicies: ''
          }],
          destinations: [{
            destinationLocation: '',
            destinationImg: ''
          }],
          facilities: [{
            items: [{
              icon: '',
              title: ''
            }]
          }],
          propertyHighlights: [{
            highlightTitle: '',
            highlightIcon: ''
          }],
          nearestPoints: [{
            pointName: '',
            distance: ''
          }],
          bookingPolicies: [{
            bookingPoliciesTitle: '',
            bookingPolicies: ''
          }]
        });
      } catch (error) {
        console.error("Error adding hotel:", error.message);
        alert(`Failed to add hotel. Error: ${error.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="hidden" name="id" value={formData.id} />
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Villa Details</div>
        <HotelContent 
          handleInputChange={handleInputChange} 
          formData={formData} // Pass the complete formData
        />
        {/* End HotelContent */}
        <div className="mt-30">
          <div className="fw-500">Hero Image</div>
          <BannerUploader 
            image={formData.heroImg}
            setImage={(url) => {
              if (url !== undefined) {
                setFormData(prevData => ({
                  ...prevData,
                  heroImg: url
                }));
              }
            }}
            label="Upload Hero Image"
          />
        </div>
        <div className="mt-30">
          <div className="fw-500">Banner Image</div>
          <BannerUploader 
            image={formData.img}
            setImage={(url) => {
              if (url !== undefined) {
                setFormData(prevData => ({
                  ...prevData,
                  img: url
                }));
              }
            }}
            label="Upload Banner"
          />
        </div>
        {/* End BannerUploader */}

        <div className="mt-30">
          <div className="fw-500">Gallery</div>
          <GalleryUploader 
            images={formData.slideImg || []} 
            setImages={(newUrls) => {
              setFormData(prev => {
                console.log('Updating gallery images:', {
                  current: prev.slideImg,
                  new: newUrls
                });
                return {
                  ...prev,
                  slideImg: newUrls
                };
              });
            }} 
          />
        </div>
        {/* End GalleryUploader */}

        <div className="border-top-light mt-30 mb-30" />

        <div className="d-inline-block pt-30">
          <button type="submit" className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
            {isEditing ? 'Save Changes' : 'Add Hotel'} 
            <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContentTabContent;
