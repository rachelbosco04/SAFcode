import React from "react";

const BlogCard = ({ Img1 }) => {
  return (
    <div>
      <div
        id="card"
        className="mx-2 mb-7 rounded-lg p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl "
      >
        <div className="overflow-hidden rounded-lg ">
          <img
            src={Img1}
            alt="No image"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="space-y-3 py-3">
          <h1 className="line-clamp-1 text-xl font-bold">
            General Awareness to All
          </h1>
          <p className="line-clamp-2">
          Lorem ipsum cybersecurity amet, omnes utentes debent scire fundamenta securitatis digitalis. Phishing emails evitandi, passwords fortes creandi, et MFA utens sunt clavis ad protegendum informationem personalem et professionalem. Cavete socialem engineering et sites suspectos, semper data sensitiva cum cura tractate. Memor esto: securitas digitalis non solum IT responsabilitas est, sed etiam omnium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
