import React from "react";
import { useHistory } from "react-router-dom";

const NftSingleUnlockables = ({
  blockchain,
  contract,
  product,
  productsFromOffer,
  selectedData,
  selectedToken,
}) => {
  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {(productsFromOffer?.length &&
        productsFromOffer.map((v) => {
          return (
            <div
              key={v._id}
              style={{
                margin: "1rem",
                height: "135px",
              }}
            >
              <div
                onClick={
                  () => history.push(`/watch/${v._id}/${v.mainManifest}`)
                  // history.push(
                  // `/unlockables/${blockchain}/${contract}/${product}/${selectedToken}`
                  // )
                }
                style={{
                  cursor: "pointer",
                  display: "flex",
                  borderRadius: "16px",
                  minWidth: "400px",
                  backgroundColor: "#4E4D4DCC",
                }}
              >
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#CCA541",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "35%",
                      left: "50%",
                      transform: "translate(-50%, -35%)",
                      zIndex: "1",
                    }}
                  >
                    <i
                      style={{
                        paddingLeft: "1px",
                        paddingTop: "8px",
                      }}
                      className="fa fa-lock"
                      aria-hidden="true"
                    ></i>
                    <p
                      style={{
                        textAlign: "center",
                        marginLeft: "-2rem",
                        marginTop: "9px",
                        width: "max-content",
                      }}
                    >
                      Coming soon
                    </p>
                  </div>
                  {/* {productsFromOffer.length && productsFromOffer.map((v) => {return } )} */}
                  <img
                    style={{
                      width: "230px",
                      opacity: "0.4",
                      height: "135px",
                      filter: "blur(3px)",
                    }}
                    src={`${v?.staticThumbnail}`}
                    // src={selectedData?.image}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    borderLeft: "4px solid #CCA541",
                    display: "flex",
                    flexDirection: "column",
                    width: "inher",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: "24px",
                  }}
                >
                  <div>
                    {" "}
                    <p style={{ fontSize: 20 }}>
                      {v?.title}
                      {/* Video {selectedData?.name} */}
                    </p>{" "}
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#A7A6A6",
                        fontSize: 20,
                      }}
                    >
                      {/* 00:03:23 */}
                      {v?.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })) || (
        <div
          style={{
            margin: "1rem",
            height: "135px",
          }}
        >
          <div
            onClick={
              () => console.log("Cooming soon")
              // history.push(
              //   `/watch/${productsFromOffer._id}/${productsFromOffer.mainManifest}`
              // )
            }
            style={{
              display: "flex",
              borderRadius: "16px",
              width: "592px",
              backgroundColor: "#4E4D4DCC",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#CCA541",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "35%",
                  left: "50%",
                  transform: "translate(-50%, -35%)",
                  zIndex: "1",
                }}
              >
                <i
                  style={{
                    paddingLeft: "1px",
                    paddingTop: "8px",
                  }}
                  className="fa fa-lock"
                  aria-hidden="true"
                ></i>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "-2rem",
                    marginTop: "9px",
                    width: "max-content",
                  }}
                >
                  Coming soon
                </p>
              </div>
              {/* {productsFromOffer.length && productsFromOffer.map((v) => {return } )} */}
              <img
                style={{
                  width: "230px",
                  opacity: "0.4",
                  height: "135px",
                  filter: "blur(3px)",
                }}
                // src={`/thumbnails/${v?.thumbnail}.png`}
                src={selectedData?.image}
                alt=""
              />
            </div>
            <div
              style={{
                borderLeft: "4px solid #CCA541",
                display: "flex",
                flexDirection: "column",
                width: "inher",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: "24px",
              }}
            >
              <div>
                {" "}
                <p style={{ fontSize: 20 }}>
                  {/* {v?.title} */}
                  Video {selectedData?.name}
                </p>{" "}
              </div>
              <div>
                <p
                  style={{
                    color: "#A7A6A6",
                    fontSize: 20,
                  }}
                >
                  00:03:23
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftSingleUnlockables;
