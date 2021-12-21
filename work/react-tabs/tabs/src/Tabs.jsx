import { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";

function Tabs(){
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
      const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("tab3");
      };
    
      let content;
      if(activeTab === "tab1"){
          content =(<FirstTab />);
      }else if(activeTab ==="tab2"){
          content = (<SecondTab />);
      }else{content = (<ThirdTab />)}

    

    return(
        <div className="tabs">
            <ul>
                <li className={activeTab === "tab1"? "active" : ""} onClick={handleTab1}>tab#1</li>
                <li className={activeTab === "tab2"? "active" : ""} onClick={handleTab2}>tab#2</li>
                <li className={activeTab === "tab3"? "active" : ""} onClick={handleTab3}>tab#3</li>
            </ul>
            <div className="content">
                {content}
            </div>
        </div>
    );
}

export default Tabs;