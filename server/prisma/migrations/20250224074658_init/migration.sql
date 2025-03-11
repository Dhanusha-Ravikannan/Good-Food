/*
  Warnings:

  - You are about to drop the column `food_item_id` on the `item_payment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `item_payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `item_payment` DROP COLUMN `food_item_id`,
    DROP COLUMN `user_id`;

-- AddForeignKey
ALTER TABLE `Item_Payment` ADD CONSTRAINT `Item_Payment_user_subscription_id_fkey` FOREIGN KEY (`user_subscription_id`) REFERENCES `User_Subscription`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item_Payment` ADD CONSTRAINT `Item_Payment_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Users`(`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
