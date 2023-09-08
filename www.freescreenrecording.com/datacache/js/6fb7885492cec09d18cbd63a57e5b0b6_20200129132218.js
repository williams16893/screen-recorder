
var NavigationFloatMenu=Base.extend({SHIFT_TIMEOUT:5000,QUICK_SHIFT:200,SLOW_SHIFT:300,_menu:null,_shiftingBtn:null,_once:true,_productIcon:null,constructor:function()
{this._menu=$('#topMenuContent');this._productIcon=$('#productIcon');this._menuWrapper=$('#topMenuWrapper');this._shiftingBtn=$('#nav_get_started .top_block_tab_link');if(this._menuWrapper!=null)
{this._scrollingContent($(window).scrollTop(),this);this._scrolling();}},_scrolling:function()
{var thisPtr=this;$(window).scroll(function(){var top=$(this).scrollTop();thisPtr._scrollingContent(top,thisPtr);});},_scrollingContent:function(top,thisPtr)
{var distance=thisPtr._menuWrapper.offset().top-top;if(distance<0)
{thisPtr._menu.addClass('start_scroll');if(thisPtr._productIcon!=null)
{thisPtr._productIcon.addClass('show_icon');thisPtr._productIcon.attr('src',thisPtr._productIcon.attr('data-original'));}
if((thisPtr._once&&thisPtr._shiftingBtn.length>0))
{thisPtr._shifting(thisPtr.SHIFT_TIMEOUT);thisPtr._shifting(thisPtr.SHIFT_TIMEOUT*3);thisPtr._once=false;}}
else
{thisPtr._menu.removeClass('start_scroll');if(thisPtr._productIcon!=null)
{thisPtr._productIcon.removeClass('show_icon');}}},_shifting:function(time)
{var thisPtr=this;setTimeout(function(){thisPtr._shiftingBtn.animate({"left":"+=20"},thisPtr.SLOW_SHIFT);thisPtr._shiftingBtn.animate({"left":"-=20"},thisPtr.SLOW_SHIFT);},time);}});$(document).ready(function(){new NavigationFloatMenu();});