import config from '../config';
import { Storage } from './Storage';
import { StorageError } from './StorageError';
import { logger } from '../logger';

// Export the Storage interface and StorageError
export * from './Storage';
export * from './StorageError';

// Dynamically import storage implementations based on configuration
import { InMemoryStorage } from './InMemoryStorage';
export * from './InMemoryStorage';

/**
 * Create and return the appropriate storage implementation based on configuration
 */
export function createStorage(): Storage {
  const storageType = config.storage.type;
  
  logger.info(`Initializing ${storageType} storage`);
  
  switch (storageType) {
    case 'memory':
      return new InMemoryStorage();
      
    case 'file':
      throw new Error('File storage is not available. Please regenerate the server with file storage support.');
      
    case 'firestore':
      throw new Error('Firestore storage is not available. Please regenerate the server with Firestore support.');
      
    default:
      throw new Error(`Unsupported storage type: ${storageType}`);
  }
}

// Create the storage instance
const storage = createStorage();

// Export the storage instance as default
export default storage;

