TODO

- i know that the endpoint generatoin is almost there  
- i need to update the endpoint generation to properly generate calls for each method within an endpoint and also handle namespcaed vs non namespaced resources 
- this means i need to update the storage interfaces to take a boolean to save to a namespaced or non-namespaced state
- i also need to settle on schema storage for each interface. For firestore specifically i need to make sure we're grabbing config to point to which collection/subcollection to store the state. 
