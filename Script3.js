function showSidebar() 
{
    const sidebar=document.querySelector('#side-bar')
    sidebar.style.display='flex'
}
function closeSideBar()
{
    const sidebar=document.querySelector('#side-bar')
    sidebar.style.display='none'
}
function showWholesale()
{
    const wholesale=document.querySelector("#order-type1")
    const bulk=document.querySelector('#order-type2')
    bulk.style.display='none'
    wholesale.style.display='block'
}
function showBulk()
{
    const wholesale=document.querySelector("#order-type1")
    const bulk=document.querySelector('#order-type2')
    bulk.style.display='block'
    wholesale.style.display='none'
}  