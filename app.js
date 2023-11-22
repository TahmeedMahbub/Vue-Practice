new Vue({
    el: "#app",
    data: {
        title: "Rafid",
        true_false: true,
        arr_ay: ["a", "b", "c"],
        obj_ect: [ 
                    {
                        name: "ABC",
                        phone: "123"
                    },
                    {
                        name: "ABC",
                        phone: "123"
                    }
                ],
        arrow_func: ()=>{
            return 1+2;
        }
    }
});