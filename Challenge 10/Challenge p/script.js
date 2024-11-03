//Only change below JS, not the HTML

let root1 = document.querySelector('[data-key="order1"]');
let biscuits1 = root1.getAttribute('data-biscuits');
let donuts1 = root1.getAttribute('data-donuts');
let pancakes1= root1.getAttribute('data-pancakes');
let status1 = root1.getAttribute('data-delivered');

let root2 = document.querySelector('[data-key="order2"]');
let biscuits2= root2.getAttribute('data-biscuits');
let donuts2= root2.getAttribute('data-donuts');
let pancakes2= root2.getAttribute('data-pancakes');
let status2= root2.getAttribute('data-delivered');

let root3 = document.querySelector('[data-key="order3"]');
let biscuits3= root3.getAttribute('data-biscuits');
let donuts3= root3.getAttribute('data-donuts');
let pancakes3= root3.getAttribute('data-pancakes');
let status3= root3.getAttribute('data-delivered');

root1.getElementsByClassName('count')[0].textContent = biscuits1
root1.getElementsByClassName('count')[1].textContent = donuts1
root1.getElementsByClassName('count')[2].textContent = pancakes1
let checkStatus1 = status1 === 'true' ? 'Delivered' : 'Pending'
root1.querySelector('.status dd').textContent = checkStatus1

root2.getElementsByClassName('count')[0].textContent = biscuits2
root2.getElementsByClassName('count')[1].textContent = donuts2
root2.getElementsByClassName('count')[2].textContent = pancakes2
let checkStatus2 = status2 === 'true' ? 'Delivered' : 'Pending'
root2.querySelector('.status dd').textContent = checkStatus2

root3.getElementsByClassName('count')[0].textContent = biscuits3
root3.getElementsByClassName('count')[1].textContent = donuts3
root3.getElementsByClassName('count')[2].textContent = pancakes3
let checkStatus3 = status3 ===  'true' ? 'Delivered' : 'Pending'
root3.querySelector('.status dd').textContent = checkStatus3


