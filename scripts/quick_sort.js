

function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start;
    var piv = div_sizes[end] ;//make the first element as pivot element.
    div_update(divs[end],div_sizes[end],"yellow",end);//Color update

        for(var j =start; j <= end-1 ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"yellow",j);//Color update

                div_update(divs[i],div_sizes[i],"red",i);//Color update
                div_update(divs[j],div_sizes[j],"red",j);//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"red",i);//Height update
                div_update(divs[j],div_sizes[j],"red",j);//Height update

                div_update(divs[i],div_sizes[i],"blue",i);//Height update
                div_update(divs[j],div_sizes[j],"blue",j);//Height update

                i += 1;
            }
    }
    div_update(divs[end],div_sizes[end],"red",end);//Color update
    div_update(divs[i],div_sizes[i],"red",i);//Color update

    var temp=div_sizes[end];//put the pivot element in its proper place.
    div_sizes[end]=div_sizes[i];
    div_sizes[i]=temp;

    div_update(divs[end],div_sizes[end],"red",end);//Height update
    div_update(divs[i],div_sizes[i],"red",i);//Height update

      div_update(divs[end],div_sizes[end],"blue",end);
    // for(var t=start;t<=i;t++)
    // {
    //     div_update(divs[t],div_sizes[t],"green",t);//Color update
    // }

    return i;//return the position of the pivot
}

function quick_sort (start, end )
{
    if(start==end)
    {
      div_update(divs[start],div_sizes[start],"green",start);
    }

    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;
        div_update(divs[piv_pos],div_sizes[piv_pos],"green",piv_pos);
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }
