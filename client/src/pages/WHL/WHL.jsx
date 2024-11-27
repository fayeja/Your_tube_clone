import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../actions/history";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./WHL.css";
import WHLvideoLst from "./WHLvideoLst";
function WHL({ wdt, name, whl }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const handleClearHistory = () => {
    if (currentUser) {
      dispatch(
        clearHistory({
          userId: currentUser?.user?.id,
        })
      );
    }
  };

  return (
    <div className="container_pages">
      <LeftSidebar wdt={wdt} />
      <div className="container_pages2">
        <p className="det">
          <div className="box_WHL leftside_whl">
            <b>Your {name} Shown Here</b>
            {name === "History" && (
              <div className="clear_HistoryBtn" onClick={handleClearHistory}>
                Clear Watch History
              </div>
            )}
          </div>
          <div className="rightSide">
            <h1> {name}</h1>
            <div className="whlList">
              <WHLvideoLst
                name={name}
                currentUser={currentUser?.user?.id}
                whl={whl}
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default WHL;
