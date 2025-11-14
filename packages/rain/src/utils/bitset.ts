/**
 * Bitmask helper class for managing bit flags.
 */
export class Bitset {
  /**
   * The bit value.
   */
  value: number;

  /**
   * Create a new bitset instance.
   * @param value - The bit value.
   */
  constructor(value: number = 0) {
    this.value = value;
  }

  /**
   * Add a bit to this set.
   * @param bit - The bit to add.
   * @returns This bitset for method chaining.
   */
  add(bit: number): Bitset {
    this.value |= bit;
    return this;
  }

  /**
   * Remove a bit from this set.
   * @param bit - The bit to remove.
   * @returns This bitset for method chaining.
   */
  remove(bit: number): Bitset {
    this.value &= ~bit;
    return this;
  }

  /**
   * Check if this set has a bit.
   * @param bit - The bit to check for.
   * @returns True if the bit is set.
   */
  has(bit: number): boolean {
    return (this.value & bit) !== 0;
  }

  /**
   * Check if this set has all bits in an array.
   * @param bits - The array of bits to check for.
   * @returns True if all bits are set.
   */
  hasAll(bits: number[]): boolean {
    for (const bit of bits) {
      if (!this.has(bit)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Clear all the bits from this set.
   * @returns This bitset for method chaining.
   */
  clear(): Bitset {
    this.value = 0;
    return this;
  }

  /**
   * Get a string representation of the bitset in binary format.
   * @returns The binary representation of the bitset.
   */
  toString(): string {
    return `0b${this.value.toString(2)}`;
  }
}
