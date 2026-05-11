-- CreateTable
CREATE TABLE `login_events` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `role_type` VARCHAR(191) NULL,
    `message` VARCHAR(191) NULL,
    `level` VARCHAR(191) NULL,
    `domain_name` VARCHAR(191) NULL,
    `ip_address` VARCHAR(191) NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `location` VARCHAR(191) NULL,
    `accuracy` INTEGER NULL,
    `user_agent` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `login_events_user_id_idx`(`user_id`),
    INDEX `login_events_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `audit_logs` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `action` VARCHAR(191) NOT NULL,
    `entity_type` VARCHAR(191) NULL,
    `entity_id` VARCHAR(191) NULL,
    `ip_address` VARCHAR(191) NULL,
    `metadata` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `audit_logs_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `packages` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `packages_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `registration_number` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `company_type` VARCHAR(191) NOT NULL,
    `profile_image` TEXT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `transaction_pin` TEXT NULL,
    `parent_id` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'IN_ACTIVE', 'DELETE') NOT NULL DEFAULT 'ACTIVE',
    `is_kyc_verified` BOOLEAN NOT NULL DEFAULT false,
    `role` VARCHAR(191) NOT NULL,
    `package_id` VARCHAR(191) NULL,
    `refresh_token` TEXT NULL,
    `password_forgot_token` VARCHAR(191) NULL,
    `password_forgot_expires` DATETIME(3) NULL,
    `last_password_forgot` DATETIME(3) NULL,
    `last_password_change` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `last_login_at` DATETIME(3) NULL,
    `user_deactivation_reason` LONGTEXT NULL,

    UNIQUE INDEX `users_registration_number_key`(`registration_number`),
    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_phone_number_key`(`phone_number`),
    INDEX `users_parent_id_idx`(`parent_id`),
    INDEX `users_phone_number_idx`(`phone_number`),
    INDEX `users_email_idx`(`email`),
    INDEX `users_registration_number_idx`(`registration_number`),
    INDEX `users_role_idx`(`role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_keys` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `api_key` VARCHAR(191) NOT NULL,
    `secret_key` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `allowed_ips` JSON NULL,
    `callback_url` VARCHAR(191) NULL,
    `webhook_secret` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `expires_at` DATETIME(3) NULL,
    `last_used_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `api_keys_api_key_key`(`api_key`),
    INDEX `api_keys_user_id_idx`(`user_id`),
    INDEX `api_keys_api_key_idx`(`api_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_access_tokens` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `api_key_id` VARCHAR(191) NULL,
    `access_token` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,
    `ip_address` VARCHAR(191) NULL,
    `user_agent` VARCHAR(191) NULL,
    `device_id` VARCHAR(191) NULL,
    `is_revoked` BOOLEAN NOT NULL DEFAULT false,
    `expires_at` DATETIME(3) NOT NULL,
    `refresh_expires_at` DATETIME(3) NULL,
    `last_used_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `api_access_tokens_access_token_key`(`access_token`),
    UNIQUE INDEX `api_access_tokens_refresh_token_key`(`refresh_token`),
    INDEX `api_access_tokens_user_id_idx`(`user_id`),
    INDEX `api_access_tokens_api_key_id_idx`(`api_key_id`),
    INDEX `api_access_tokens_access_token_idx`(`access_token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_request_logs` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `api_key_id` VARCHAR(191) NULL,
    `transaction_id` VARCHAR(191) NULL,
    `endpoint` VARCHAR(191) NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `ip_address` VARCHAR(191) NULL,
    `request_headers` JSON NULL,
    `request_body` JSON NULL,
    `response_body` JSON NULL,
    `status_code` INTEGER NULL,
    `response_time` INTEGER NULL,
    `error_message` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `api_request_logs_user_id_idx`(`user_id`),
    INDEX `api_request_logs_api_key_id_idx`(`api_key_id`),
    INDEX `api_request_logs_transaction_id_idx`(`transaction_id`),
    INDEX `api_request_logs_endpoint_idx`(`endpoint`),
    INDEX `api_request_logs_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rate_limits` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `api_key_id` VARCHAR(191) NULL,
    `endpoint` VARCHAR(191) NOT NULL,
    `requests` INTEGER NOT NULL DEFAULT 0,
    `limitCount` INTEGER NOT NULL DEFAULT 100,
    `windowSeconds` INTEGER NOT NULL DEFAULT 60,
    `reset_at` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `rate_limits_user_id_idx`(`user_id`),
    INDEX `rate_limits_api_key_id_idx`(`api_key_id`),
    INDEX `rate_limits_endpoint_idx`(`endpoint`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_kyc` (
    `id` VARCHAR(191) NOT NULL,
    `registration_number` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL,
    `status` ENUM('PENDING', 'VERIFIED', 'REJECT') NOT NULL DEFAULT 'PENDING',
    `type` ENUM('AEPS', 'USER_KYC') NOT NULL DEFAULT 'USER_KYC',
    `kycType` VARCHAR(191) NOT NULL DEFAULT 'MANUAL',
    `kyc_rejection_reason` LONGTEXT NULL,
    `address_id` VARCHAR(191) NOT NULL,
    `pan_file` VARCHAR(191) NOT NULL,
    `aadhaar_file` VARCHAR(191) NOT NULL,
    `address_proof_file` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_kyc_registration_number_key`(`registration_number`),
    INDEX `user_kyc_address_id_fkey`(`address_id`),
    INDEX `user_kyc_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business_verifications` (
    `id` VARCHAR(191) NOT NULL,
    `registration_number` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `kyc_rejection_reason` LONGTEXT NULL,
    `document_file` VARCHAR(191) NOT NULL,
    `address_id` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'VERIFIED', 'REJECT') NOT NULL DEFAULT 'PENDING',
    `rejection_reason` VARCHAR(191) NULL,
    `verified_at` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `business_verifications_registration_number_key`(`registration_number`),
    UNIQUE INDEX `business_verifications_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank_details` (
    `id` VARCHAR(191) NOT NULL,
    `account_holder` TEXT NOT NULL,
    `account_number` VARCHAR(18) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `account_type` ENUM('PERSONAL', 'BUSINESS') NOT NULL,
    `ifsc_code` TEXT NOT NULL,
    `bank_name` TEXT NOT NULL,
    `bank_rejection_reason` LONGTEXT NULL,
    `bank_proof_file` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'VERIFIED', 'REJECT') NOT NULL DEFAULT 'PENDING',
    `is_primary` BOOLEAN NOT NULL DEFAULT false,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `bank_details_account_number_key`(`account_number`),
    INDEX `bank_details_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `beneficiarys` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `account_number` VARCHAR(191) NOT NULL,
    `ifsc` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(15) NOT NULL,
    `is_verified` BOOLEAN NOT NULL DEFAULT false,
    `meta_data` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `beneficiarys_user_id_idx`(`user_id`),
    UNIQUE INDEX `beneficiarys_user_id_account_number_ifsc_key`(`user_id`, `account_number`, `ifsc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addresses` (
    `id` VARCHAR(191) NOT NULL,
    `kyc_id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL DEFAULT 'HOME',
    `address` LONGTEXT NOT NULL,
    `pin_code` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallets` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `wallet_type` ENUM('PRIMARY', 'COMMISSION', 'ESCROW', 'BONUS', 'GST', 'TDS') NOT NULL,
    `balance` DOUBLE NOT NULL,
    `hold_balance` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    INDEX `wallets_user_id_idx`(`user_id`),
    UNIQUE INDEX `wallets_user_id_wallet_type_key`(`user_id`, `wallet_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_limits` (
    `user_id` VARCHAR(191) NOT NULL,
    `dailyLimit` DOUBLE NULL,
    `monthlyLimit` DOUBLE NULL,
    `perTxnLimit` DOUBLE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commission_settings` (
    `id` VARCHAR(191) NOT NULL,
    `scope` ENUM('ROLE', 'USER') NOT NULL DEFAULT 'ROLE',
    `role_id` VARCHAR(191) NULL,
    `target_user_id` VARCHAR(191) NULL,
    `serviceProviderMappingId` VARCHAR(191) NOT NULL,
    `mode` ENUM('NONE', 'COMMISSION', 'SURCHARGE') NOT NULL DEFAULT 'NONE',
    `type` ENUM('NONE', 'FLAT', 'PERCENTAGE') NOT NULL DEFAULT 'NONE',
    `value` DOUBLE NOT NULL,
    `apply_tds` BOOLEAN NOT NULL DEFAULT false,
    `tds_percent` DOUBLE NULL,
    `apply_gst` BOOLEAN NOT NULL DEFAULT false,
    `gst_percent` DOUBLE NULL,
    `created_by` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,
    `support_slab` BOOLEAN NOT NULL DEFAULT false,
    `support_payment_method` BOOLEAN NOT NULL DEFAULT false,
    `packageId` VARCHAR(191) NULL,

    UNIQUE INDEX `commission_settings_serviceProviderMappingId_role_id_key`(`serviceProviderMappingId`, `role_id`),
    UNIQUE INDEX `commission_settings_serviceProviderMappingId_target_user_id_key`(`serviceProviderMappingId`, `target_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commission_slabs` (
    `id` VARCHAR(191) NOT NULL,
    `commission_setting_id` VARCHAR(191) NOT NULL,
    `min_amount` DOUBLE NOT NULL,
    `max_amount` DOUBLE NOT NULL,
    `value` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `commission_slabs_min_amount_max_amount_idx`(`min_amount`, `max_amount`),
    UNIQUE INDEX `commission_slabs_commission_setting_id_min_amount_max_amount_key`(`commission_setting_id`, `min_amount`, `max_amount`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commission_payment_methods` (
    `id` VARCHAR(191) NOT NULL,
    `commission_setting_id` VARCHAR(191) NOT NULL,
    `mode` ENUM('NONE', 'COMMISSION', 'SURCHARGE') NOT NULL DEFAULT 'NONE',
    `type` ENUM('NONE', 'FLAT', 'PERCENTAGE') NOT NULL DEFAULT 'NONE',
    `value` DOUBLE NOT NULL,
    `payment_method` VARCHAR(191) NULL,
    `network` VARCHAR(191) NULL,
    `category` VARCHAR(191) NULL,
    `serviceType` VARCHAR(191) NULL,
    `operator` VARCHAR(191) NULL,
    `apply_tds` BOOLEAN NOT NULL DEFAULT false,
    `tds_percent` DOUBLE NULL,
    `apply_gst` BOOLEAN NOT NULL DEFAULT false,
    `gst_percent` DOUBLE NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `commission_payment_methods_payment_method_network_idx`(`payment_method`, `network`),
    UNIQUE INDEX `commission_payment_methods_commission_setting_id_payment_met_key`(`commission_setting_id`, `payment_method`, `network`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commission_earnings` (
    `id` VARCHAR(191) NOT NULL,
    `transaction_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `from_user_id` VARCHAR(191) NULL,
    `service_provider_mapping_id` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `mode` ENUM('NONE', 'COMMISSION', 'SURCHARGE') NOT NULL,
    `type` ENUM('NONE', 'FLAT', 'PERCENTAGE') NOT NULL,
    `net_amount` DOUBLE NOT NULL,
    `meta_data` JSON NULL,
    `created_by` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `commission_earnings_transaction_id_user_id_idx`(`transaction_id`, `user_id`),
    INDEX `commission_earnings_user_id_created_at_idx`(`user_id`, `created_at`),
    INDEX `commission_earnings_service_provider_mapping_id_idx`(`service_provider_mapping_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `services_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `providers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `providers_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_provider_mappings` (
    `id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `provider_id` VARCHAR(191) NOT NULL,
    `base_url` VARCHAR(191) NULL,
    `config` JSON NULL,
    `priority` INTEGER NOT NULL DEFAULT 1,
    `supports_slab` BOOLEAN NOT NULL DEFAULT false,
    `support_payment_method` BOOLEAN NOT NULL DEFAULT false,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `service_provider_mappings_service_id_idx`(`service_id`),
    INDEX `service_provider_mappings_provider_id_idx`(`provider_id`),
    INDEX `service_provider_mappings_priority_idx`(`priority`),
    UNIQUE INDEX `service_provider_mappings_service_id_provider_id_key`(`service_id`, `provider_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provider_charge_rules` (
    `id` VARCHAR(191) NOT NULL,
    `service_provider_mapping_id` VARCHAR(191) NOT NULL,
    `payment_method` VARCHAR(191) NULL,
    `network` VARCHAR(191) NULL,
    `category` VARCHAR(191) NULL,
    `operator` VARCHAR(191) NULL,
    `operator_code` VARCHAR(191) NULL,
    `bank_code` VARCHAR(191) NULL,
    `transaction_type` VARCHAR(191) NULL,
    `min_amount` DOUBLE NULL,
    `max_amount` DOUBLE NULL,
    `mode` ENUM('NONE', 'COMMISSION', 'SURCHARGE') NOT NULL DEFAULT 'NONE',
    `pricing_value_type` ENUM('NONE', 'FLAT', 'PERCENTAGE') NOT NULL DEFAULT 'NONE',
    `value` DOUBLE NOT NULL,
    `provider_cost` DOUBLE NULL,
    `apply_tds` BOOLEAN NOT NULL DEFAULT false,
    `tds_percent` DOUBLE NULL,
    `apply_gst` BOOLEAN NOT NULL DEFAULT false,
    `gst_percent` DOUBLE NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `config` JSON NULL,
    `handle_path` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `provider_charge_rules_service_provider_mapping_id_idx`(`service_provider_mapping_id`),
    INDEX `provider_charge_rules_payment_method_network_idx`(`payment_method`, `network`),
    INDEX `provider_charge_rules_operator_code_idx`(`operator_code`),
    INDEX `provider_charge_rules_bank_code_idx`(`bank_code`),
    INDEX `provider_charge_rules_transaction_type_idx`(`transaction_type`),
    INDEX `provider_charge_rules_min_amount_max_amount_idx`(`min_amount`, `max_amount`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_permissions` (
    `id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `can_view` BOOLEAN NOT NULL DEFAULT false,
    `can_edit` BOOLEAN NOT NULL DEFAULT false,
    `can_set_commission` BOOLEAN NOT NULL DEFAULT false,
    `can_process` BOOLEAN NOT NULL DEFAULT false,
    `limits` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `user_permissions_service_id_fkey`(`service_id`),
    UNIQUE INDEX `user_permissions_user_id_service_id_key`(`user_id`, `service_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_permissions` (
    `id` VARCHAR(191) NOT NULL,
    `package_id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `can_view` BOOLEAN NOT NULL DEFAULT false,
    `can_process` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `package_permissions_service_id_fkey`(`service_id`),
    UNIQUE INDEX `package_permissions_package_id_service_id_key`(`package_id`, `service_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `settings` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `company_logo` VARCHAR(191) NOT NULL,
    `fav_icon` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `whtsapp_number` VARCHAR(191) NOT NULL,
    `company_email` VARCHAR(191) NOT NULL,
    `facebook_url` VARCHAR(191) NOT NULL,
    `instagram_url` VARCHAR(191) NOT NULL,
    `twitter_url` VARCHAR(191) NOT NULL,
    `linkedin_url` VARCHAR(191) NOT NULL,
    `website_url` VARCHAR(191) NOT NULL,
    `settings` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    INDEX `settings_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` VARCHAR(191) NOT NULL,
    `idempotency_key` VARCHAR(191) NOT NULL,
    `txn_id` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `net_amount` DOUBLE NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'PENDING',
    `service_provider_mapping_id` VARCHAR(191) NULL,
    `pricing` JSON NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `wallet_id` VARCHAR(191) NOT NULL,
    `provider_reference` VARCHAR(191) NULL,
    `request_init` JSON NULL,
    `provider_response_init` JSON NULL,
    `provider_response` JSON NULL,
    `retry_count` INTEGER NOT NULL DEFAULT 0,
    `initiated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `processed_at` DATETIME(3) NULL,
    `completed_at` DATETIME(3) NULL,
    `last_checked_at` DATETIME(3) NULL,

    UNIQUE INDEX `transactions_idempotency_key_key`(`idempotency_key`),
    UNIQUE INDEX `transactions_txn_id_key`(`txn_id`),
    INDEX `transactions_user_id_status_idx`(`user_id`, `status`),
    INDEX `transactions_status_initiated_at_idx`(`status`, `initiated_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ledger_entries` (
    `id` VARCHAR(191) NOT NULL,
    `transaction_id` VARCHAR(191) NULL,
    `wallet_id` VARCHAR(191) NOT NULL,
    `entry_type` ENUM('DEBIT', 'CREDIT') NOT NULL,
    `reference_type` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `running_balance` DOUBLE NOT NULL,
    `narration` TEXT NOT NULL,
    `metadata` JSON NULL,
    `idempotency_key` VARCHAR(191) NULL,
    `created_by` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `serviceProviderMappingId` VARCHAR(191) NULL,

    INDEX `ledger_entries_transaction_id_idx`(`transaction_id`),
    INDEX `ledger_entries_wallet_id_created_at_idx`(`wallet_id`, `created_at`),
    INDEX `ledger_entries_idempotency_key_idx`(`idempotency_key`),
    UNIQUE INDEX `ledger_entries_idempotency_key_key`(`idempotency_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bbps_categories` (
    `id` VARCHAR(191) NOT NULL,
    `biller` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `bbps_categories_biller_key`(`biller`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bbps_billers` (
    `id` VARCHAR(191) NOT NULL,
    `biller_id` VARCHAR(191) NOT NULL,
    `biller_name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `customer_params` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `bbps_billers_biller_id_key`(`biller_id`),
    INDEX `bbps_billers_category_idx`(`category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bbps_fetch_bill` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `service_provider_mapping_id` VARCHAR(191) NOT NULL,
    `biller_id` VARCHAR(191) NOT NULL,
    `reference` VARCHAR(191) NOT NULL,
    `fetch_id` VARCHAR(191) NOT NULL,
    `customer_params` JSON NULL,
    `customer_params_key` VARCHAR(191) NULL,
    `amount` DOUBLE NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `customer_name` VARCHAR(191) NULL,
    `due_date` DATETIME(3) NULL,
    `raw_response` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `bbps_fetch_bill_fetch_id_key`(`fetch_id`),
    INDEX `bbps_fetch_bill_user_id_biller_id_customer_params_key_idx`(`user_id`, `biller_id`, `customer_params_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `login_events` ADD CONSTRAINT `login_events_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_package_id_fkey` FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `api_keys` ADD CONSTRAINT `api_keys_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `api_access_tokens` ADD CONSTRAINT `api_access_tokens_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `api_access_tokens` ADD CONSTRAINT `api_access_tokens_api_key_id_fkey` FOREIGN KEY (`api_key_id`) REFERENCES `api_keys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `api_request_logs` ADD CONSTRAINT `api_request_logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `api_request_logs` ADD CONSTRAINT `api_request_logs_api_key_id_fkey` FOREIGN KEY (`api_key_id`) REFERENCES `api_keys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `api_request_logs` ADD CONSTRAINT `api_request_logs_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rate_limits` ADD CONSTRAINT `rate_limits_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rate_limits` ADD CONSTRAINT `rate_limits_api_key_id_fkey` FOREIGN KEY (`api_key_id`) REFERENCES `api_keys`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_kyc` ADD CONSTRAINT `user_kyc_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `addresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_kyc` ADD CONSTRAINT `user_kyc_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `business_verifications` ADD CONSTRAINT `business_verifications_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `business_verifications` ADD CONSTRAINT `business_verifications_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `addresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bank_details` ADD CONSTRAINT `bank_details_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wallets` ADD CONSTRAINT `wallets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_limits` ADD CONSTRAINT `user_limits_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_settings` ADD CONSTRAINT `commission_settings_target_user_id_fkey` FOREIGN KEY (`target_user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_settings` ADD CONSTRAINT `commission_settings_serviceProviderMappingId_fkey` FOREIGN KEY (`serviceProviderMappingId`) REFERENCES `service_provider_mappings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_settings` ADD CONSTRAINT `commission_settings_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `packages`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_slabs` ADD CONSTRAINT `commission_slabs_commission_setting_id_fkey` FOREIGN KEY (`commission_setting_id`) REFERENCES `commission_settings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_payment_methods` ADD CONSTRAINT `commission_payment_methods_commission_setting_id_fkey` FOREIGN KEY (`commission_setting_id`) REFERENCES `commission_settings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_earnings` ADD CONSTRAINT `commission_earnings_service_provider_mapping_id_fkey` FOREIGN KEY (`service_provider_mapping_id`) REFERENCES `service_provider_mappings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_earnings` ADD CONSTRAINT `commission_earnings_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_earnings` ADD CONSTRAINT `commission_earnings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_earnings` ADD CONSTRAINT `commission_earnings_from_user_id_fkey` FOREIGN KEY (`from_user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commission_earnings` ADD CONSTRAINT `commission_earnings_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service_provider_mappings` ADD CONSTRAINT `service_provider_mappings_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service_provider_mappings` ADD CONSTRAINT `service_provider_mappings_provider_id_fkey` FOREIGN KEY (`provider_id`) REFERENCES `providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `provider_charge_rules` ADD CONSTRAINT `provider_charge_rules_service_provider_mapping_id_fkey` FOREIGN KEY (`service_provider_mapping_id`) REFERENCES `service_provider_mappings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_permissions` ADD CONSTRAINT `user_permissions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_permissions` ADD CONSTRAINT `user_permissions_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `package_permissions` ADD CONSTRAINT `package_permissions_package_id_fkey` FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `package_permissions` ADD CONSTRAINT `package_permissions_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `settings` ADD CONSTRAINT `settings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_wallet_id_fkey` FOREIGN KEY (`wallet_id`) REFERENCES `wallets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_service_provider_mapping_id_fkey` FOREIGN KEY (`service_provider_mapping_id`) REFERENCES `service_provider_mappings`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ledger_entries` ADD CONSTRAINT `ledger_entries_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ledger_entries` ADD CONSTRAINT `ledger_entries_wallet_id_fkey` FOREIGN KEY (`wallet_id`) REFERENCES `wallets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ledger_entries` ADD CONSTRAINT `ledger_entries_serviceProviderMappingId_fkey` FOREIGN KEY (`serviceProviderMappingId`) REFERENCES `service_provider_mappings`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ledger_entries` ADD CONSTRAINT `ledger_entries_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
