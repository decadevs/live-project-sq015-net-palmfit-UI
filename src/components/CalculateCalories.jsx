import React, {useState} from 'react'
import '../styles/Calories.css'

export default function CalulateCalories() {

    const [option, setOption] = useState('Select');

    function pickOption(newOption) {
      setOption(newOption);
    }
    return (
        <>
        <div class="container">
            <div class="calBody mt-4">
            <div class="holder">
                <div class="top">
                    <span>Kcal</span>
                    <div class="value">
                        <h2>0.0</h2>
                    </div>
                </div>
                <div class="bottom mt-4">
                    <div class="foodHolder mb-3">
                        <span>Food</span>
                        <input type="text" placeholder="Enter a Food" class="form-control py-4" />
                    </div>
                    <div class="foodQuality mb-3">
                        <span>Food Quantity</span>
                        <div class="takers d-flex align-items-center">
                        <input type="text" placeholder=" " class="form-control py-4 me-2" />
                        <select id="country" name="country" class="form-select flex-grow-1">
                            <option value="australia">{option}</option>
                            <option onClick={() => pickOption('Cup')} value="Cup">Cup</option>
                            <option onClick={() => pickOption('Bottle')} value="Bottle">Bottle</option>
                            <option onClick={() => pickOption('TeaSpoon')} value="TeaSpoon">TeaSpoon</option>
                        </select>
                        </div>
                        <div class="submity mt-3">
                        <button type="submit" id="btn-style" class="btn btn-primary">Calculate Calorie</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
