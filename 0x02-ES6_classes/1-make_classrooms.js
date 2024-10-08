import ClassRoom from './0-classroom';

/**
 * Initialize classroom objects with specified sizes.
 * @returns {Array} Array of ClassRoom objects.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
