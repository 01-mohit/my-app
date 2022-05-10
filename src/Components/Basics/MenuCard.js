import React from 'react';

export const MenuCard = ({ menuData }) => {
  // console.log("mh", menuData);
  // console.log(typeof (menuData));
  // const ArrayData = Object.entries(menuData);
  // console.log(ArrayData);
  // console.log(typeof (ArrayData));
  return (
    <>
      <section className="main-card-container">

        {
          // Object.entries(menuData).map(function (eky, index) {
          // Object.values(menuData).map((currElement) => {
          menuData.map((currElement) => {
            const { id, name, category, image, description } = currElement;
            return (
              <>
                <div className="card-container" key={id}>
                  <div className="card">
                    <div className="card-body">
                      <span className="card-number card-circle subtle">{id}
                      </span>
                      <span className="card-author subtile">{category}</span>
                      <h2 className="card-title">{name}</h2>
                      <span>
                        {description}
                      </span>
                      <div className="card-read">
                        Read
                      </div>
                    </div>
                    <img src={image} alt="images" className="card-media" />

                  </div>
                </div>
              </>
            );
          })
        }

      </section>
    </>
  );
};
// export default MenuCard;
