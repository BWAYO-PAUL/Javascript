test('obj assignment',()=>{
    const data = {one: 1}
    data['two']=6  
    expect(data).toEqual({one:1,two:2})
})