export const Utils = {
	methods : {
	  	lapinTrouve(piece) {
			this.$bus.$emit('lapin-trouve',piece);
	  	}  	
	}
}