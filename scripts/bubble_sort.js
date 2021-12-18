

function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow",j);//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red",j);//Color update
                div_update(divs[j+1],div_sizes[j+1], "red",j+1);//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red",j);//Height update
                div_update(divs[j+1],div_sizes[j+1], "red",j+1);//Height update
            }
            div_update(divs[j],div_sizes[j], "blue",j);//Color updat
        }
        div_update(divs[j],div_sizes[j], "green",j);//Color update
    }
    div_update(divs[0],div_sizes[0], "green",0);//Color update

    enable_buttons();
}
