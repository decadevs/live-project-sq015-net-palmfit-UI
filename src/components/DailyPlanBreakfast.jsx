import React,{useState} from "react";
import "./DailyPlanBreakfast.css";
import chevronDownSvg from './chevron-down.svg';

function DailyPlanBreakfast () {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
        <div className="daily-plan-breakfast">
            <div className="div">
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="group">
                        <div className="text-wrapper">Plain white rice</div>
                        <div className="text-wrapper-2">2.5 cups</div>
                        <div className="text-wrapper-3">605 calories</div>
                    </div>
                    <div className="group-2">
                        <div className="text-wrapper">Efo riro</div>
                        <div className="text-wrapper-2">100 grams</div>
                        <div className="text-wrapper-3">87 calories</div>
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-4">Breakfast</div>
                        <div className="text-wrapper-5">692 calories</div>
                        <img className="line" alt="line" src="line.svg" />
                        <img className="chevron-down" alt="Chevron down" src={chevronDownSvg} />
                    </div>
                </div>
                <div className="group-4">
                    <div className="text-wrapper-6">Name of daily plan</div>
                    <div className="text-wrapper-7">1874 calories</div>
                </div>
                <div className="group-5">
                    <div className="text-wrapper-4">Lunch</div>
                    <div className="text-wrapper-5">723 calories</div>
                    <img className="line" alt="line" src="line.svg" />
                    <img className="chevron-down" alt="Chevron down" src={chevronDownSvg} />
                </div>
                <div className="group-6">
                    <div className="text-wrapper-4">Dinner</div>
                    <div className="text-wrapper-5">491 calories</div>
                    <img className="line" alt="line" src="line.svg" />
                    <img className="chevron-down" alt="Chevron down" src={chevronDownSvg} />
                </div>
                <div className="buttons">
                    <div className="overlap-group">
                        <div className="text-wrapper-8">Get plan</div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default DailyPlanBreakfast;