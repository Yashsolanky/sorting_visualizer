

function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red",i);//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow",j);//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue",index_min);//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red",index_min);//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue",j);//Color update
            }
        }

        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red",index_min);//Height update
            div_update(divs[i],div_sizes[i],"red",i);//Height update
            div_update(divs[index_min],div_sizes[index_min],"blue",index_min);//Color update
        }
        div_update(divs[i],div_sizes[i],"green",i);//Color update
    }
     div_update(divs[i],div_sizes[i],"green",i);//Color update

    enable_buttons();
}
