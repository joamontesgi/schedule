function propertyName() {
    let siCustomer = document.getElementById('siCustomer');
    let propertyName = document.getElementById('propertyName');
    let selectCustomer = document.getElementById('selectCustomer');
    let nameProperty = document.getElementById('nameProperty');
    let selectProperty = document.getElementById('selectProperty');
    if (siCustomer.checked) {
        propertyName.innerHTML = `
        <label><b>What is your customer?</b>
            <select name="a" required>
                <option value="">Please select</option>
                <option value="one">Customer 1</option>
                <option value="one">Customer 2</option>
            </select>
        </label>`;
        selectCustomer.innerHTML = '';
        nameProperty.innerHTML = `
        <label><b>What is your Property?</b>
            <select name="b" required>
                <option value="">Please select</option>
                <option value="one">Property 1</option>
                <option value="one">Property 2</option>
            </select>
        </label>`;
        selectProperty.innerHTML =
            ``;
    } else {
        propertyName.innerHTML = `
        <label><b>Property name:</b>
            <input type="text" placeholder="Example: Property 1" required>
        </label>`;
        selectCustomer.innerHTML = `
        `;
        nameProperty.innerHTML = '';
        selectProperty.innerHTML = '';
    }
}

function whoMoves() {
    let occupied = document.getElementById('occupied');
    let listWhoMove = document.getElementById('listWhoMove');
    if (occupied.checked) {
        listWhoMove.innerHTML =
            `<label><b>Who moves furniture?</b>
            <select name="c" required>
                <option value="">Please select</option>
                <option value="one">BuildCare</option>
                <option value="one">The property</option>
             </select>
        </label>`;
    } else {
        listWhoMove.innerHTML = '';
    }
}

function showBedrooms() {
    let allUnit = document.getElementById('allUnit');
    let bedrooms = document.getElementById('bedrooms');
    let specificArea = document.getElementById('specificArea');
    if (allUnit.checked) {
        bedrooms.innerHTML = `
        <label><b>Number of bedrooms?: </b>
            <select name="a" required>
                <option value="">Please select</option>
                <option value="one">1</option>
                <option value="one">2</option>
            </select>
        </label>
        `;
        specificArea.innerHTML = '';
    } else {
        bedrooms.innerHTML = `
        <label><b>Specific area: </b>
            <select name="a" required>
                <option value="">Please select</option>
                <option value="one">Kitchen </option>
                <option value="one">Bathroom</option>
            </select>
        </label>
        <br>
        <label>Width (cms):
        <input type="number" value="si" name="state" id="allUnit" placeholder="100" required>
    </label>
    <br>
    <label>Height (cms):
        <input type="number" value="si" name="state" id="allUnit"  placeholder="50" required>
    </label>
    <br>
    <label>Depth (cms):
        <input type="number" value="si" name="state" id="allUnit"  placeholder="30" required>
    </label>
    <br>
        `;

    }
}


function unit2() {
    let siUnit = document.getElementById('siUnit1');
    let measures = document.getElementById('measures1');
    let unitNumber = document.getElementById('unitNumber1');
    let specific = document.getElementById('specific1');
    let bedrooms = document.getElementById('bedrooms1');
    if (siUnit.checked) {
        unitNumber.innerHTML =
            `<label><b>Unit size (square foot): </b>
                <input type="text" placeholder="1500" required>
            </label>
            <br>
            <label><b>Please, select an option: </b></label>
            <br>
            <label>Occupied 
                <input type="radio" value="si" name="state" id="occupied" onchange="whoMoves()" required>
            </label>
            <label>Vacant
                <input type="radio" value="no" name="state" id="free" onchange="whoMoves()">
            </label>         
            <div id="listWhoMove"></div>
            <br>
            `;
        specific.innerHTML = '';
        unitPlace.innerHTML = `
            <br>
            <label><b>Please, select an option: </b></label>
            <br>
            <label>All 
                <input type="radio" value="si" name="state" id="allUnit" onchange="showBedrooms()" required>
            </label>
            <label>Only on 
                <input type="radio" value="si" name="state" id="onlyOn" onchange="showBedrooms()" required>
            </label>              
            `;
        measures.innerHTML = '';

    } else {
        unitNumber.innerHTML = '';
        specific.innerHTML =
            `<label><b>What it's your common area?: </b>
            <input type="text" placeholder="Example: Pool " required>
            </label>`;
        unitPlace.innerHTML = '';
        bedrooms.innerHTML = '';
        measures.innerHTML = `
            <label>Width (cms):
                <input type="number" value="si" name="state" id="allUnit" placeholder="100" required>
            </label>
            <br>
            <label>Height (cms):
                <input type="number" value="si" name="state" id="allUnit"  placeholder="50" required>
            </label>
            <br>
            <label>Depth (cms):
                <input type="number" value="si" name="state" id="allUnit"  placeholder="30" required>
            </label>
            <br>
            `;
    }
}
function unit() {
    let siUnit = document.getElementById('siUnit');
    let measures = document.getElementById('measures');
    let unitNumber = document.getElementById('unitNumber');
    let specific = document.getElementById('specific');
    let bedrooms = document.getElementById('bedrooms');
    if (siUnit.checked) {
        unitNumber.innerHTML =
            `<label><b>Unit size (square foot): </b>
                <input type="text" placeholder="1500" required>
            </label>
            <br>
            <label><b>Please, select an option: </b></label>
            <br>
            <label>Occupied 
                <input type="radio" value="si" name="state" id="occupied" onchange="whoMoves()" required>
            </label>
            <label>Vacant
                <input type="radio" value="no" name="state" id="free" onchange="whoMoves()">
            </label>         
            <div id="listWhoMove"></div>
            <br>
            `;
        specific.innerHTML = '';
        unitPlace.innerHTML = `
            <br>
            <label><b>Please, select an option: </b></label>
            <br>
            <label>All 
                <input type="radio" value="si" name="state" id="allUnit" onchange="showBedrooms()" required>
            </label>
            <label>Only on 
                <input type="radio" value="si" name="state" id="onlyOn" onchange="showBedrooms()" required>
            </label>              
            `;
        measures.innerHTML = '';

    } else {
        unitNumber.innerHTML = '';
        specific.innerHTML =
            `<label><b>What it's your common area?: </b>
            <input type="text" placeholder="Example: Pool " required>
            </label>`;
        unitPlace.innerHTML = '';
        bedrooms.innerHTML = '';
        measures.innerHTML = `
            <label>Width (cms):
                <input type="number" value="si" name="state" id="allUnit" placeholder="100" required>
            </label>
            <br>
            <label>Height (cms):
                <input type="number" value="si" name="state" id="allUnit"  placeholder="50" required>
            </label>
            <br>
            <label>Depth (cms):
                <input type="number" value="si" name="state" id="allUnit"  placeholder="30" required>
            </label>
            <br>
            `;
    }
}

function dam() {
    let sidammage = document.getElementById('sidammage');
    let visible = document.getElementById('visible');
    // let specific = document.getElementById('specific');
    if (sidammage.checked) {
        visible.innerHTML =
            `<label><b>Is there any water dammage visible? </b></label>
            <br>
            <label>Yes 
                <input type="radio" value="si" name="state" id="occupied" required>
            </label>
            <label>No
                <input type="radio" value="no" name="state" id="free">
            </label>         
            <br>
            <label><b>Description of water damage:</b>
            <br>
                <textarea required> </textarea>
            </label>
            <br>
            `;
    } else {
        visible.innerHTML = '';
    }
}
function dama() {
    let sidammage = document.getElementById('sidammages');
    let visible = document.getElementById('visibl');
    // let specific = document.getElementById('specific');
    if (sidammage.checked) {
        visible.innerHTML =
            `<label><b>Is there any water dammage visible? </b></label>
            <br>
            <label>Yes 
                <input type="radio" value="si" name="state" id="occupied" required>
            </label>
            <label>No
                <input type="radio" value="no" name="state" id="free">
            </label>         
            <br>
            <label><b>Description of water damage:</b>
            <br>
                <textarea required> </textarea>
            </label>
            <br>
            `;
    } else {
        visible.innerHTML = '';
    }
}


function extras() {
    let siextras = document.getElementById('siextras');
    let explianExtras = document.getElementById('explianExtras');
    if (siextras.checked) {
        explianExtras.innerHTML =
            `<label><b>Please, specify extras:  </b></label>
            <br>
            <textarea required> </textarea>
            `;
    } else {
        explianExtras.innerHTML = '';
    }
}


function specify() {
    let only = document.getElementById('only');
    let where = document.getElementById('where');
    if (only.checked) {
        where.innerHTML =
            `<label><b>Specific area(s) inside the unit: </b>
            <br>
            <textarea required> </textarea>
            </label>
            <br>
            `;
    } else {
        where.innerHTML = '';
    }
}
function who() {
    let other = document.getElementById('other');
    let whos = document.getElementById('whos');
    if (other.checked) {
        whos.innerHTML =
            `<label><b>Please, specify the type of floor to install:  </b>
            <br>
            <textarea required> </textarea>
            </label>
            <br>
            `;
    } else {
        whos.innerHTML = '';
    }
}
function job() {
    let other = document.getElementById('other_job');
    let job = document.getElementById('job');
    if (other.checked) {
        job.innerHTML =
            `<label><b>Please, specify the type of job:  </b>
            <br>
            <textarea required> </textarea>
            </label>
            <br>
            `;
    } else {
        job.innerHTML = '';
    }
}
function type_mold() {
    let yes_use = document.getElementById('yes_use');
    let type = document.getElementById('type_mold');
    if (yes_use.checked) {
        type.innerHTML =
            `<label>Please, select the basemolding </label>
            <br>
            <label><input type="checkbox">Baseboard</label>
            <label><input type="checkbox">Shomoding</label>
            <label><input type="checkbox">Covebase</label>
            <label><input type="checkbox">Transition molding</label>
            `;
    } else {
        type.innerHTML = ``;
    }
}




function molding() {
    let yes_mold = document.getElementById('yes_mold');
    let type = document.getElementById('type_mold');
    let mold = document.getElementById('mold');
    if (yes_mold.checked) {
        mold.innerHTML =
            `<label>Do you want use the existing molding?</label>
            <br>
            <label>Yes 
            <input type="radio" name="a2" id="yes_use" onchange="type_mold()" required>
            </label>
            <label>No
                <input type="radio" name="a2" id="no_use" onchange="type_mold()" >
            </label>
            <br>
            `;
    } else {
        mold.innerHTML = ``;
        type.innerHTML = ``;
    }
}