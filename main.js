'use strict'
const backedbtn=document.querySelector('#back');
const about=document.querySelector('.body')
const modalContainer=document.querySelector('.modals');
const modal2Container=document.querySelector('.modal-selected')
const cancel=document.querySelector('#times')
const selectReward=document.querySelector('.btn-select')
const amount=document.querySelector('#amount')
const people=document.querySelector('#people')
const progress=document.querySelector('#progress')
const pledges=document.querySelectorAll('.pledges')
const radios=document.querySelectorAll('#check')
const number=document.querySelectorAll('#input')
const continues=document.querySelectorAll('#continue')
const finish=document.querySelector('.got-it')

modalContainer.classList.add('hides')
modal2Container.classList.add('hides');

//back project button
backedbtn.addEventListener('click',function(){
    about.classList.add('opacity');
    modalContainer.classList.remove('hides')
    modalContainer.classList.add('style')
})
//cancel on back project modal
cancel.addEventListener('click',function(){
    about.classList.remove('opacity');
    modalContainer.classList.add('hides')
    modalContainer.classList.remove('style')
}
)
//input check button
radios.forEach(check => {
    check.addEventListener('click',function(e){
        const pledgeContainer=e.currentTarget.parentElement.parentElement;
        pledgeContainer.classList.add('show-text')
        console.log(pledgeContainer)
        //continue button
        continues.forEach(continueBtn => {
            continueBtn.addEventListener('click',function(e){
                const continueContainer=e.currentTarget.parentElement.parentElement;
                continueContainer.classList.remove('show-text')
                modalContainer.classList.add('hides')
                modal2Container.classList.remove('hides')
                modal2Container.classList.add('style-select')
                modalContainer.classList.remove('style');
                //got it button
                finish.addEventListener('click',function(){
                    modal2Container.classList.remove('style-select')
                    modal2Container.classList.add('hides');
                    about.classList.remove('opacity');
                })
            })
        });
        add()
        console.log(pledgeContainer.dataset.value)
        });        
});
const add=function(){
    const num=Number(people.innerHTML)
    people.innerHTML=num+1
    console.log(num)
}