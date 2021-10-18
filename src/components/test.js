import React, { Component } from 'react';
import $ from 'jquery';


$(document).ready(function(){

    // get element in textarea
    var textBox = $('#characterCount');

    textBox.keyup(function(){
        // set hashmap
        let hashmap = new Map();
        var characters = $(this).val();

        // iterate each characters
        for(let ch of characters){

            // check for alphabet characters
            var isAlpha = function(ch){
                return typeof ch === "string" && ch.length === 1 && /[A-Za-z]/.test(ch);
            }

            // update only alphabet characters
            if(isAlpha(ch)){
                //convert into uppercase
                ch = ch.toUpperCase();


                //if not in hashmap, create a key and set value to 1
                if(!hashmap.has(ch)){
                    hashmap.set(ch, 1);
                }
                // if already in hashmap, increment value by 1
                else{
                    var occ = hashmap.get(ch);
                    hashmap.set(ch, occ+1);
                }

                // output format
                var test = ch + ": " + hashmap.get(ch)

                console.log(ch + ": " + hashmap.get(ch))
                console.log(hashmap);

                // <p> tag with id of each alphabet
                var e = $("<p></p>");
                e.attr('id', ch);

                // if new hashmap, create new tag
                if($("#" + ch).length === 0) {
                    $(".output-container").append($(e).append(test));
                }
                // else update value
                else{
                    $("#"+ch).text(ch + ": " + hashmap.get(ch));
                }

                // remove line if certain character doesnt exist in textarea
                for(var i = 65; i <= 90; i++){
                    if(!hashmap.has(String.fromCharCode(i))){
                        $("#"+String.fromCharCode(i)).remove()
                    }
                }



            }
        } 
    });
})

// refresh page button
function refreshPage(){
    window.location.reload(false);
}

class Test extends Component{
    render(){
        return(
            <div className="test-container">
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" id="characterCount" placeholder="Enter text here" rows="6"></textarea>
                            <span id="status"></span>
                        </div>
                    </form>
                    <button className="btn btn-primary" type="submit" onClick={refreshPage}>Refresh</button>
                </div>
                <div className="output-container">

                </div>
            </div>
        );
    }
}

export default Test;