class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
        statck=''
    ){
        super(message)
        this.message=message
        this.success=false;
        this.errors=errors
    }
}
export {ApiError}