/*
* Author: Min Kyung Chae
* This is a calculator for calculating Basal Metabolic Rate.
* This BMR calculator uses Mifflin-St Jeor Equation. Of three equations I know, Miffin-St is effectively accurate and versatile.
* For men:
* BMR = 10W + 6.25H - 5A + 5
* For women:
* BMR = 10W + 6.25H - 5A - 161
* 
*/

var age, sex, weight, height, bmr;

document.querySelector('#calculate_btn_id').addEventListener('click', function(){
    
    var cal_btn = document.getElementById('calculate_btn_id');
    if(document.getElementById('bmr_id')){
            document.getElementById('bmr_id').remove();
       }
    
    age = parseFloat(document.getElementById('age_id').value);
    weight = parseFloat(document.getElementById('weight_id').value);
    height = parseFloat(document.getElementById('height_id').value);  
    sex = setSex();
    
    if(sex === 'male'){
        bmr = 10*weight + 6.2*height - 5*age + 5;
    } else{
        bmr = 10*weight + 6.2*height - 5*age - 161;
    }
    
    console.log(age);
    console.log(weight);
    console.log(height);
    console.log(sex);
    console.log(bmr);
    
    if(isNaN(age) || isNaN(weight) || isNaN(height)){
            cal_btn.insertAdjacentHTML('afterend','<div id="bmr_id">' + 'Please fill out all the fields above.'+ '</div>');
       }else{
            cal_btn.insertAdjacentHTML('afterend','<div id="bmr_id">' + 'Your BMR is ' + bmr + '</div>');
       }
    
});

function setSex(){
    
    var isMale = document.querySelector('#male').checked;
    if (isMale){
        sex = 'male';
    }else{
        sex = 'female';
    }
    
    return sex;
}


















