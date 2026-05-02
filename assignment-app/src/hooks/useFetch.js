// This will be a custom hook:
//   It will be used to fetch data.
//    It will receive two props:  1.) dataPoint - This is a string, which the user selects from a dropdown box (to search the API)
//                                2.) keywordItem - This is a string, which the user enters into the input field (to search the API)
//  It will return: { loading, error, data }
//  {loading} : This is a boolean, true or false, depending on if it's loading info or not
//  {error} : This will return if something goes wrong!
//  {data} : This object will return, and is the primary use for this custom hook!
