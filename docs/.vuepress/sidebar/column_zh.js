module.exports = function() {
    return[
        {
            title: '计算机基础',
            collapsable: true,
            sidebarDepth: 3,
            children: [
                ['/zh/column/', '概览'],
                ['/zh/column/basic_cs/compile', 'GCC编译基础'],
                ['/zh/column/basic_cs/compile_with_python', 'C++与Python混编'],
            ]
        },
    ]
}

