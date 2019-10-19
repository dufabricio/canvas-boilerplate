import Sample1 from './sample1.js'
import Sample2 from './sample2.js'

let loadSample = (sampleName) => { 
    let samples = document.querySelectorAll('canvas');
    samples.forEach((sample)=>{
        if(sample.getAttribute('class') === sampleName){
            sample.style.display = 'block';
        }else{
            sample.style.display = 'none';
        }
    });
}

document.querySelectorAll('ul.menu li').forEach((menuItem)=>{
    menuItem.addEventListener("click",(event)=>{
        loadSample(menuItem.getAttribute("class"));
    });
});
   