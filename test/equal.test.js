test('Test toBe', () => { 
    const name = "Rizki"
    const sayHello = `Hai ${name}`

    expect(sayHello).toBe('Hai Rizki')
 })

 test('Test toEquals', () => {
     let data = {id: 1}
     Object.assign(data, {name: "Rizki"})

     expect(data).toEqual({id: 1, name: "Rizki"})
  })