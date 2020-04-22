const webApiUrl = "http://localhost:3001";

class ProductService {
    
    get = async () => {
        const options = {
            method: "GET",
        }
     const request = new Request(webApiUrl + "/productlist", options);
     const response = await fetch(request);
     return response.json();
    }

    fetch = async (id) => {
        const options = {
            method: "GET",
        }
     const request = new Request(webApiUrl + "/product/" + id, options); 
     const response = await fetch(request);
     return response.json();
    }

    post = async (model) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify(model)
        }
        const request = new Request(webApiUrl + "/productstore", options);
        const response = await fetch(request);
        return response;
    }

    put = async (model, id) => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json");
        var options = {
            method: "PUT",
            headers,
            body: JSON.stringify(model)
        }
        const request = new Request(webApiUrl + "/productupdate/" + id, options);
        const response = await fetch(request);
        return response;
    }

    delete = async (id) => {
        const options = {
            method: "DELETE",
        }
     const request = new Request(webApiUrl + "/deleteproduct/" + id, options); 
     const response = await fetch(request);
     return response.json();
    }
}
export default ProductService;