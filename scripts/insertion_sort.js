

function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow",j);//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red",i);//Color update
            div_update(divs[i+1],div_sizes[i+1],"red",i+1);//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red",i);//Height update
            div_update(divs[i+1],div_sizes[i+1],"red",i+1);//Height update

            div_update(divs[i],div_sizes[i],"blue",i);//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow",i+1);//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue",i+1);//Color update
            }
            i--;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green",t);//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green",j-1);//Color update

    enable_buttons();
}
