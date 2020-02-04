using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Threading.Tasks;

namespace Web.Shared
{
    public class TopNavMenuBase : FragmentNavigationBase  //ComponentBase
    {
        protected ElementReference headerNav;
        protected bool collapseNavMenu = true;
        protected string NavToggleCssClass => collapseNavMenu ? "collapsed" : null;
        protected string NavMenuCssClass => !collapseNavMenu ? "show" : null;

        //[Inject]
        //public IJSRuntime JSRuntime { get; set; }

        //[Inject]
        //public NavigationManager NavigationManager { get; set; }

        protected void ToggleNavMenu() => collapseNavMenu = !collapseNavMenu;

        //protected override async Task OnAfterRenderAsync(bool firstRender) => await NavigateToElementAsync();

        //protected async Task NavigateToElementAsync()
        //{
        //    var fragment = new Uri(NavigationManager.Uri).Fragment;
        //    var elementId = !string.IsNullOrEmpty(fragment) && fragment.StartsWith("#") ? fragment.Substring(1) : fragment;

        //    await JSRuntime.InvokeAsync<bool>("blazorHelpers.scrollToFragment", elementId, headerNav);
        //}
    }
}
