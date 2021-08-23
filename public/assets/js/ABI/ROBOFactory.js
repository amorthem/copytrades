const ROBOFactory = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_PancakeV2Router",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_WETH",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_BUSD",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_PBX",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AddFundManagerFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "AssetsStorages",
		"outputs": [
			{
				"internalType": "address",
				"name": "assetsAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "BUSD",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CopyTradeFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DeptDev",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DeptInvestor",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DeptMarketing",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PBX",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ROBOBankAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TransPercentFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UNISWAP_V2_ROUTER",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WETH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WithdrawPercentFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_AssetsStorages",
		"outputs": [
			{
				"internalType": "address",
				"name": "assetsAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fundId",
				"type": "uint256"
			}
		],
		"name": "_fundBalance",
		"outputs": [
			{
				"internalType": "address",
				"name": "fundAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "masterBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fundBalance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fundId",
				"type": "uint256"
			}
		],
		"name": "_fundInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "fundAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "masterAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "fundName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "profitShareToManager",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "BUSDfee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_assetsAddress",
				"type": "address"
			}
		],
		"name": "addAssets",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_ROBOBank",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_master",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_fundName",
				"type": "string"
			}
		],
		"name": "addFundmanager",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ROBOBankAddress",
				"type": "address"
			}
		],
		"name": "addROBOBankAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_assetsAddress",
				"type": "address"
			}
		],
		"name": "checkAllowAssets",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_depositSender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_fundAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isMaster",
				"type": "bool"
			}
		],
		"name": "deposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_assetsAddress",
				"type": "address"
			}
		],
		"name": "disableAssets",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "feeToo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUNISWAP_V2_ROUTER",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "percentFeeToDeptDevOfFeeTotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "percentFeeToDeptInvestorOfFeeTotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "percentFeeToDeptMarketingOfFeeTotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "percentFeeToROBOBankAddressOfFeeTotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "percentFeeTotals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ROBOBankAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_DeptDev",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_DeptMarketing",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_DeptInvestor",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_PBX",
				"type": "address"
			}
		],
		"name": "setup1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_percentFeeTotal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_percentFeeToROBOBankAddressOfFeeTotal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_percentFeeToDeptDevOfFeeTotal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_percentFeeToDeptMarketingOfFeeTotal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_percentFeeToDeptInvestorOfFeeTotal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_AddFundManagerFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_CopyTradeFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_TransPercentFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_WithdrawPercentFee",
				"type": "uint256"
			}
		],
		"name": "setup2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_fundAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_managerBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_BUSDfee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_profitShareToManager",
				"type": "uint256"
			}
		],
		"name": "setupFund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAssets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalFundmanager",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "withdrawFactory",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];