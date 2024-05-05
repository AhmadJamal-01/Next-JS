
type BlogPageDetailType = {
    params: { id: string };
    searchParams: any;
  };
function Page ({params, searchParams}:BlogPageDetailType)  {
console.log(searchParams);
console.log(params);

    return (
<div>

React Server Components (params, searchparams )
<div>client Components (useparams, useSearchparams )</div>
My post:(" ") {params.id}
</div>
    )
}

export default Page;