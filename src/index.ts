const GlobalConfig = {
    rage_attack: 86,
    rage_counter: 16,
    damage_attack: 200,
    damage_counter: 200
}


interface Effect {}

class March {
    // skill_rage = 1000
    // skill_primary_damage = 1500
    // skill_secondary_damage = 1200
    // turn_rage = 16

    constructor(
        public skill_rage: number,
        public skill_primary_damage: number,
        public skill_secondary_damage: number,
        public effects: Effect[]) {
    }

}

class MarchState {

    constructor(
        public rage = 0,
        public damage_done = 0,
        public damage_taken = 0
    ) {
    }

    
}

type SimulationConfig = {
    runs: number
    player_march: March,
    enemy_march: March
}

type SimulationResult = {}

class Simulation {
    
    public results: SimulationResult[]
    constructor(
        public readonly config: SimulationConfig) {
            this.results = []
    }

    run() {
        for(let iter = 1; iter <= config.runs; iter++) {
            this.results.push(this.single_run(iter))
        }
    }

    single_run(iter: number) {
        console.log(`Iteration: ${iter}`)
        const num_rounds = 30
        for(let round = 1; round <= num_rounds; round++) {
            const results = this.advance_round(round)
            console.log(results)
        }
        return {}
    }

    advance_round(round: number) { 
        
    }
}

const config = {
    runs: 10000,
    player_march: new March(1000, 1500, 1200),
    enemy_march: new March(1000, 1500, 1200)
}

const sim = new Simulation(config)

sim.run()