export default {
    commom: {
        tx: {
            confirmInfoTX: 'Transaction Details',
            confirmInfoType: 'Transaction Type',
            confirmInfoPayaddr: 'Payment address',
            confirmInfoReceiveAddr: "Receiver's Address",
            confirmInfoSendMoney: 'Amount',
            confirmInfoName: 'Delegate Name',
            confirmInfoFees: 'Mining Fee',
            dialogError: 'Error',
            dialogConfirm: 'Confirm',
            dialogTxID: 'Transaction ID',
            dialogCopy: 'Copy',
            msg1: 'Cannot be empty',
            msg2: 'Length cannot exceed 32 bytes',
            msg3: 'Registering...',
            msg4: 'Insufficient balance',
            msg5: 'Password Incorrect',
            msg6: 'Packing...',
            msg7: 'Sending...',
            msg8: 'Sent successfully, waiting for the incoming block',
            msg9: 'Copied',
            msg10: 'Copy error',
            selectAgent: 'Choose delegate'
        },
        passDialog: {
            dialogTitle: 'Please enter password',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            updateButtonText: 'Update'
        }
    },
    versionLog: [
        {
            version: '1.0.0',
            content: [
                'New transfer function',
                'New node registration, voting function',
                'New Chinese, English language switch'
            ]
        },
        {
            version: '1.0.1',
            content: [
                'Modify known bug'
            ]
        }
    ],
    create: {
        index: {
            createWallet: 'Create Wallet',
            importWallet: 'Import Wallet'
        },
        create: {
            navTitle: 'Create Wallet',
            walletName: 'Wallet Name',
            walletPassword: 'Wallet Password',
            reWalletPassword: 'Confirm Password',
            checkbox1: 'I agree to the Protocal of Usage',
            checkbox2: 'Protocal of Usage',
            createWallet: 'Create Wallet',
            msg: 'Please note! Lightning Bitcoin wallet does not store user passwords, cannot provide retrieval and reset function, please be sure to save the set password!',
            termTitle: 'Terms of Service and Privacy policy',
            walletNameMsg: 'The wallet name cannot be empty',
            walletPasswordMsg1: 'Password cannot be empty',
            walletPasswordMsg2: 'The password must consist of 6-21 letters and Numbers',
            reWalletPasswordMsg: 'The two password are not consistent,please re-enter',
            checkboxMsg: 'Agree on Terms of Service and Privacy Policy',
            sumMsg: 'The maximum number of wallets is 5, please delete and import later.',
            createMsg: 'Creating wallet'
        },
        mnemonic: {
            navTitle: 'Backup Mnemonic',
            title1: 'Write down correctly on paper',
            content1: 'Those 12 mnemonic words are for recovering your wallet,write down correctly on paper and keep in a safe place',
            title2: 'Confirm your mnemonic words',
            content2: 'Please choose mnemonic words in order and make sure your mnemonic was correct written',
            button: 'Confirm',
            next: 'Next',
            dialogTitle: 'Don‘t screenshot',
            dialogContent: 'Anyone with your mnemonic words can access or spend your assets! Please write down on paper and keep it safe',
            dialogButton: 'Understood',
            msg1: 'The backup successful',
            msg2: 'Mnemonic error'
        },
        packup: {
            navTitle: 'Please Backup',
            title: 'The last step: back up the mnemonic immediately',
            content: 'We highly recommend you write the Mnemonic words(Backup Phrase) on paper and keep it in a safe place,anyone get it can access or spend your assets.Also get start with a small amount of assets.',
            button1: 'Go Backup Now',
            button2: 'Skip backup (not recommended)',
            dialogTitle: 'Please enter password',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            msg1: 'Password Incorrect',
            msg2: 'An unknown error,Please re-import your wallet'
        }
    },
    guide: 'Begin to use',
    import: {
        navTitle: 'Import Wallet',
        tabTitle1: 'Mnemonic',
        tabTitle2: 'Private Key',
        mnemTextarea: 'Please use space to separate the mnemonic words',
        prvTextarea: 'Please input your private key',
        importMnem: 'Import Mnemonic',
        importPrv: 'Import Private Key',
        msg1: 'Wrong nomber of mnemonic words',
        msg2: 'Importing wallet',
        msg3: 'Synchronizing data',
        msg4: 'Invalid Private Key'
    },
    main: {
        tabName1: 'Wallet',
        tabName2: 'News',
        tabName3: 'My',
        updataTitle: 'Hint',
        updataMessage: 'The version is too low, please update',
        confirmButtonText: 'Update',
        cancelButtonText: 'Cancel',
        refresh: 'Pull down to refresh',
        infinite: 'More',
        noMoreData: 'No more data',
        noData: 'No data'
    },
    mine: {
        about: {
            navTitle: 'About us',
            currentVersion: 'Current Version',
            about: 'Lightning Wallet is a mobile light wallet app designed for Lightning Bitcoin (LBTC). Currently, it only supports LBTC transfer and node voting. It is designed to provide LBTC users with a safe and secure digital asset wallet application.',
            term: 'Terms of Service',
            log: 'Version Release',
            checkVersion: 'Check for updates',
            popupNavTitle1: 'Terms of Service and Privacy policy',
            popupNavTitle2: 'Version Release',
            checkVersionLoading: 'Loading',
            checkVersionMsg1: 'No update available',
        },
        addrInfo: {
            navTitle: 'Contacts',
            name: 'Name',
            addr: 'Address',
            addrPlaceholder: "Receiver's Address",
            other: 'Memo',
            bottonContent1: 'Confirm',
            bottonContent2: 'Save',
            bottonContent3: 'Delete',
            msg1: 'Name can‘t be empty',
            msg2: 'Address can‘t be empty',
            msg3: 'Invalid Address',
            msg4: 'Added',
            msg5: 'Failed',
            msg6: 'Changed',
            msg7: 'Failed',
            msg6: 'Deleted',
            msg7: 'Failed',
            dialogTitle: 'Hint',
            dialogContent: 'Delete this address?'
        },
        addrs: {
            navTitle: 'Contacts',
            msg1: 'No Records',
            msg2: 'add'
        },
        help: {
            navTitle: 'Help',
            items: [
                {
                    id: 1,
                    title: 'What is MyLBTC?',
                    content: 'MyLBTC is a new digital currency wallet that provides users with one-stop storage, redemption and consumer services. MyLBTC only supports MyLBTC for the time being, and will continue to support more digital currencies.'
                },
                {
                    id: 2,
                    title: 'How to create a wallet?',
                    content: 'Open MyLBTC, select the wallet on the wallet start page, set the transaction password, the wallet is created successfully; the user needs to back up the wallet mnemonic according to the prompt, with the mnemonic to completely control the wallet assets, MyLBTC does not store the user wallet. Words, lost mnemonics, lost wallet assets, please be sure to save.'
                },
                {
                    id: 3,
                    title: 'How to import a wallet?',
                    content: 'On the MyLBTC wallet start page, select Import Wallet and enter the backup wallet mnemonic. After successful verification, set the transaction password, and the wallet is imported successfully, and you can start managing the digital assets backed up by the mnemonic.'
                },
                {
                    id: 4,
                    title: 'How to backup your wallet?',
                    content: 'After creating the wallet successfully, follow the prompts to enter the backup link, copy the wallet mnemonic and save it to a safe place; Step 2: After entering the wallet, enter the backup link through my wallet management-wallet backup function. Backup.'
                },
                {
                    id: 5,
                    title: 'Can I retrieve the backup wallet mnemonic when it is lost?',
                    content: 'MyLBTC does not store the user’s wallet mnemonic, and the mnemonic is only stored on the user‘s mobile phone. If the backup mnemonic is lost, you can re-back it up through MyLBTC‘s setup-wallet backup function; if the backup mnemonic is lost and the MyLBTC wallet app is uninstalled, the mnemonic will not be retrieved. Please keep it safe!'
                },
                {
                    id: 6,
                    title: 'How to transfer/receive?',
                    content: 'On the MyLBTC wallet list page, click Transfer and Receipt to start the transfer: select the transfer, enter the payee address and transfer amount, verify the transaction password, then complete the transfer; select the payment, page display receipt 2D The code, the payer can scan the QR code to complete the transfer, or the payee clicks the QR code to copy the payment address, and the share is sent to the payer.'
                },
                {
                    id: 7,
                    title: 'How to change the password? What if I forget my password?',
                    content: 'After I have verified my password with My Wallet Management - to change the password, I can set a new password. Because MyLBTC does not store the user password, if the password is forgotten, the user re-sets the wallet with the backup wallet mnemonic or private key, and then resets the password. If you forget your password and lose your wallet mnemonic, you will lose your wallet assets.'
                },
                {
                    id: 8,
                    title: 'Is MyLBTC charged? What is the rate?',
                    content: 'MyLBTC will only generate the main network transfer miners and will not incur additional charges.'
                },
                {
                    id: 9,
                    title:'How to delete a wallet?',
                    content: 'You can delete your wallet after verifying your wallet password through My Wallet Management - Select Wallet - Delete Wallet. Important: MyLBTC does not store the user‘s wallet mnemonic. Once the wallet is deleted, the user can only re-import the wallet and retrieve the assets through the backup mnemonics(private key). Please keep your wallet mnemonic carefully!'
                }
            ]
        },
        index: {
            title1: 'Manage Wallet',
            title2: 'Transaction Records',
            title3: 'Contacts',
            title4: 'Settings',
            title5: 'Help',
            title6: 'About us'
        },
        manage: {
            navTitle: 'Manage Wallet'
        },
        manageInfo: {
            navRight: 'Save',
            availablebalance: 'Available',
            unavailablebalance: 'Unavailable',
            walletName: 'Wallet Name',
            changePass: 'Change Password',
            exportPrv: 'Export Private Key',
            packupMnem: 'Backup Mnemonic',
            deleWallet: 'Delete Wallet',
            copy: 'Copy',
            popupNavTitle: 'Change Password',
            oldPass: 'Current password',
            newPass: 'New password',
            reNewPass: 'Repeat password',
            confirmChange: 'Save',
            msg1: 'Saved',
            msg2: 'Deleted',
            msg3: 'Password Incorrect',
            msg4: 'Copied',
            msg5: 'Copy error',
            msg6: 'Old password cannot be empty',
            msg7: 'Password must consist of 6-21 letters and numbers',
            msg8: 'Password doesn‘t match',
            msg9: 'Old Password Incorrect',
            msg10: 'New password should not be same as old password',
            msg11: 'Changed'
        },
        set: {
            navTitle: 'Settings',
            lang: 'Language',
            langType: 'English'
        },
        terms: {

        },
        txHis: {
            navTitle: 'Transaction Records',
            title: 'Recent transaction history',
            msg1: 'No Records',
            msg2: 'Completed',
            msg3: 'No more data'
        },
        txHisInfo: {
            navTitle: 'Transaction Details',
            title1: 'Sender',
            title2: 'Receiver',
            title3: 'Transaction ID',
            title4: 'Height',
            title5: 'Time',
            title6: 'Copy URL',
            title7: 'Copied',
            title8: 'Copy error'
        }
    },
    vote: {
        index: {
            navTitle: 'LBTC Node Election',
            item1: 'View votes',
            item1Msg1: 'Receive votes',
            item1Msg2: 'Voted',
            item1Msg3: 'Not an agent',
            item2: 'Register as an agent',
            item3: 'Vote',
            item3Msg: 'Left',
            item4: 'Cancel the vote',
            toastMsg1: 'Already an agent',
            toastMsg2: 'No data',
            toastMsg3: 'No data',
            votes: 'votes'
        },
        register: {
            navTitle: 'Register as a delegate',
            confirmInfoTxType: 'Delegate registration',
            addr: 'Address',
            name: 'Delegate name',
            balance: 'Balance',
            namePlaceholder: 'Please enter a name',
            warnMsg: 'Delegate registration fee charges 1LBTC',
            next: 'Next'
        },
        vote: {
            navTitle: 'Delegates List',
            confirmInfoTxType: 'Node Elections',
            thead: {
                td1: 'Delegate Name',
                td2: 'Number of votes'
            },
            search: 'Search',
            button1: 'Optional',
            button2: 'Vote',
            noMoreThanTotal: 'No more than the total'
        },
        votecancel: {
            navTitle: 'Cancel the vote',
            confirmInfoTxType: 'Node Election',
            button1: 'Selected',
            button2: 'Cancel the vote'
        },
        voters: {
            navTitle: 'Voters',
        },
        votes: {
            navTitle: 'Votes',
        }
    },
    wallet: {
        send: {
            navTitle: 'Send',
            confirmInfoTxType: 'Send',
            payAddr: 'Payment wallet',
            receiveAddr: "Receiver's Address",
            receiveAddrPlaceholder: "Please enter the  receiver's address",
            payMoney: 'Amount',
            balance: 'Balance',
            moneyInputPlaceholder: 'Amount',
            next: 'Next',
            selectionAddr: 'Select contact',
            noAddrContent: 'No contact, please',
            noAddrAddAddr: 'Add contact',
            checkWarnMsg1: 'Address cannot be empty',
            checkWarnMsg2: 'Address wrong',
            checkWarnMsg3: 'Invalid amoun',
            checkWarnMsg4: 'Amount in excess of balance',
            checkWarnMsg5: 'The amount is too small',
            checkWarnMsg6: 'No more than 8 decimal places',
        },
        index: {
            backup: 'Please Backup',
            availablebalance: 'available',
            unavailablebalance: 'unavailable',
            tabName1: 'Send',
            tabName2: 'Receive',
            tabName3: 'Vote',
            moreHisContent: 'Display up to 10 items, click',
            moreHisButton: 'More',
            walletListTitle: 'My Wallet',

        },
        receive: {
            navTitle: 'Receive LBTC',
            title: "Receiver's Address",
            copyToClipboard: 'Copy to the clipboard',
            msg1: 'Copied',
            msg2: 'Copy error'
        }
    }
};