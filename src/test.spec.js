import  test  from "ava";

 const sampleFunction=(arr,newElement)=>{
	
	arr.push(newElement)
	return arr

}


test ('push element into array',t=>{
	let arr=[];
	let previouslength =arr.length
	console.log(previouslength)
	sampleFunction(arr,2)
	let lengthAfterTest = arr.length;
	console.log(lengthAfterTest)
		t.truthy(lengthAfterTest>previouslength, "element added sucessfully")
	
}


)

test ('failed to push element into array',t=>{
	let arr=[];
	let previouslength =arr.length
	sampleFunction(arr,3)
	let lengthAfterTest = arr.length;
		t.falsy(lengthAfterTest<previouslength || lengthAfterTest===previouslength ,"element not added sucessfully" )
	
}

)
